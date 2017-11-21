import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/platform-browser';
import * as _ from "lodash";
import {fadeInAnimation} from './animations/index';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import Scrollbar from 'smooth-scrollbar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class AppComponent {
  submit = false;
  moving= false;
  menuActive = false;
  success = false;
  failure = false;
  checking = true;
  logo ='assets/img/logo-white.png';
  model = {
    email: ''
  };
  input = {
    email: false
  }
  private throttleOnScroll = _.throttle(() => this.onScroll(), 50, {});


  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,private router: Router, private location: Location,public http: HttpClient){

  }


  ngOnInit() {
      this.location.subscribe((ev:PopStateEvent, ) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
        
          if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl){
              if(ev.url == "/programs/leadCs" || ev.url == "/programs/SCLA" || ev.url == "/programs/seals" || ev.url == "/programs/hustlencode" || ev.url == "/getInvolved/volunteer" || ev.url == "/getInvolved/mentor" || ev.url == "/getInvolved/fellowship"){
                
              }else{
                
                this.yScrollStack.push(window.scrollY);
              }
            }
          } else if (ev instanceof NavigationEnd) {
            if(ev.url == "/programs/leadCs" || ev.url == "/programs/SCLA" || ev.url == "/programs/seals" || ev.url == "/programs/hustlencode" || ev.url == "/getInvolved/volunteer" || ev.url == "/getInvolved/mentor" || ev.url == "/getInvolved/fellowship"){
              
            }
            else if (ev.url == this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
            } else
                  window.scrollTo(0, 0);
          }
      });
  }

  title = 'app';
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.throttleOnScroll();
  }
  showMenu(){
    this.menuActive = !this.menuActive;
  }
  closeMenu(){
    this.menuActive = !this.menuActive;
  }
  onScroll(){
    let number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if( number > 100){
      this.moving = true;
      this.logo = 'assets/img/txt-home-logo.png'
    }else{
      this.moving = false;
      this.logo = 'assets/img/logo-white.png'
    }
  }
  inputCheck(key, input) {
    this.input[key] = !input;
  }
  onSubmit(data){
    this.submit = true;
    var payload = {
      "email" : data.model
    }

    this.http.post('http://ec2-54-244-178-153.us-west-2.compute.amazonaws.com:3000/subscribe/saveSubscriber',payload).subscribe(
      (data) => {
        this.checking = false;
        this.success = true;
        this.model = {
          email:''
        }   
      },
      (err) => {
        this.checking = false;
        this.failure = true;
        console.log(err);
      });
  }
  exit(){
    this.submit = false;
    this.failure = false;
    this.success = false;
    this.checking =true;
  }


}

