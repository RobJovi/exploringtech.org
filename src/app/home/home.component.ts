import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  links = [true, false, false, false];
  content = [true, false, false, false];
  aboutUsContent = ['inactive', 'inactive'];
  currentState = ['in', 'out', 'out', 'out'];
  timer;
  subscription;
  hiddenContent = [false,true,true];
  hiddenSlide = [false,true,true];
  currentSlide = 0;
  slides0 = [false, false, false, false];
  slides1 = [false, false, false, false];
  slides2 = [false, false, false, false];
  sliderImg = ['','',''];
  paused = false;

  reset;
  showContent=[true,false,false,false,false,false,false,false];  
  imgSrc = [];
  submit = false;
  moving= false;
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
  width;

  constructor(public http: HttpClient) { 
    this.width = document.documentElement.clientWidth;
    this.resizeImgs(this.width);
    const $resizeEvent = Observable.fromEvent(window, 'resize')
    .map(() => {
      return document.documentElement.clientWidth;
      })
    .debounceTime(200)


    $resizeEvent.subscribe(data => {
      this.width = data;
      this.resizeImgs(data);
    });


    this.imgSrc = [
      'assets/circle/Computer.png',
      'assets/circle/Award.png',
      'assets/circle/School.png',
      'assets/circle/People.png',
      'assets/circle/Hat.png',
      'assets/circle/Case.png',
      'assets/circle/Hands.png'
    ]
    this.animateTitleSet(this.currentSlide);




  }
  resizeImgs(width){
    if(width >= 1280){
      this.sliderImg = [
        'assets/slider/steve-jobs-1366.JPG',
        'assets/slider/scla-2017-camp-1366.JPG',
        'assets/slider/txt-labs.png'
      ]
    }else {
      this.sliderImg = [
        'assets/slider/steve-jobs-1366.JPG',
        'assets/slider/scla-2017-camp-1366.JPG',
        'assets/slider/txt-labs.png'
      ]
    }

 }
  ngOnInit() {
    this.timer = Observable.timer(9000);
    this.subscription = this.timer.subscribe((t) => this.autoPlay());
  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }
  showInfo(num){
    this.showContent=[false,false,false,false,false,false,false,false]; 
    this.showContent[num]= true; 

    this.imgSwap(num);
  }
  autoPlay(){
    if(this.paused == false)
    {
      this.next();
      this.subscription.unsubscribe();
      this.timer = Observable.timer(9000);
      this.subscription = this.timer.subscribe((t) => this.autoPlay());
    }
  }
  indicatorClick(num){
    this.subscription.unsubscribe();
    this.timer = Observable.timer(9000);
    this.subscription = this.timer.subscribe((t) => this.autoPlay());

    this.hiddenSlide[this.currentSlide] = true;
    this.currentSlide = num;
    this.hiddenSlide[num] = false;
    this.animateTitleSet(num);
  }
  next(){

    this.subscription.unsubscribe();
    this.timer = Observable.timer(9000);
    this.subscription = this.timer.subscribe((t) => this.autoPlay());

    if(this.currentSlide == (this.hiddenSlide.length - 1)){
      var next = 0;
      this.hiddenSlide[this.currentSlide] = true;
      this.hiddenSlide[next] = false;

      this.currentSlide = 0;
      this.animateTitleSet(next);
    }else{
      var next = this.currentSlide + 1;
      this.hiddenSlide[this.currentSlide] = true;
      this.hiddenSlide[next] = false;

      this.currentSlide += 1;
      this.animateTitleSet(next);
    }
    
  }
  prev(){
    this.subscription.unsubscribe();
    this.timer = Observable.timer(6000);
    this.subscription = this.timer.subscribe((t) => this.autoPlay());

    if(this.currentSlide == 0){
      var prev = (this.hiddenSlide.length - 1);
      this.hiddenSlide[this.currentSlide] = true;
      this.hiddenSlide[prev] = false;

      this.currentSlide = (this.hiddenSlide.length - 1);
      this.animateTitleSet(prev);
    }else{
      var prev = this.currentSlide - 1;
      this.hiddenSlide[this.currentSlide] = true;
      this.hiddenSlide[prev] = false;

      this.currentSlide -= 1;
      this.animateTitleSet(prev);
    }
  }
  imgSwap(num){
    if(this.reset){
      this.resetImg(this.reset);
    }
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer-alt.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award-alt.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School-alt.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People-alt.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat-alt.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case-alt.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands-alt.png';
    }
    this.reset = num;
  }

  resetImg(num){
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands.png';
    }
  }


  hoverCircle(num){
    if(num == 1){
      this.imgSrc[0] = 'assets/circle/Computer-alt.png';
    }else if( num ==2){
      this.imgSrc[1] = 'assets/circle/Award-alt.png';
    }else if(num == 3){
      this.imgSrc[2] = 'assets/circle/School-alt.png';
    }else if( num ==4){
      this.imgSrc[3] = 'assets/circle/People-alt.png';
    }else if(num == 5){
      this.imgSrc[4] = 'assets/circle/Hat-alt.png';
    }else if( num == 6){
      this.imgSrc[5] = 'assets/circle/Case-alt.png';
    }else if(num == 7){
      this.imgSrc[6] = 'assets/circle/Hands-alt.png';
    }
  }
  hoverCircleAlt(num,condition){
    if(condition == false){
      if(num == 1){
        this.imgSrc[0] = 'assets/circle/Computer.png';
      }else if( num ==2){
        this.imgSrc[1] = 'assets/circle/Award.png';
      }else if(num == 3){
        this.imgSrc[2] = 'assets/circle/School.png';
      }else if( num ==4){
        this.imgSrc[3] = 'assets/circle/People.png';
      }else if(num == 5){
        this.imgSrc[4] = 'assets/circle/Hat.png';
      }else if( num == 6){
        this.imgSrc[5] = 'assets/circle/Case.png';
      }else if(num == 7){
        this.imgSrc[6] = 'assets/circle/Hands.png';
      }
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
  resetTitleSets() {
    this.hiddenContent = [true,true];
    this.slides0 = [false, false, false, false];
    this.slides1 = [false, false, false, false];
    this.slides2 = [false, false, false, false];
  }

  animateTitleSet(num) {
    this.resetTitleSets();
    this.hiddenContent[num] = false;
    var thisItem = this;
    if (num == 0) {
      setTimeout(function () {
        thisItem.slides0[0] = true;
        setTimeout(function () {
          thisItem.slides0[1] = true;
        }, 400);
        setTimeout(function () {
          thisItem.slides0[2] = true;
        }, 500);
        setTimeout(function () {
          thisItem.slides0[3] = true;
        }, 500);
      }, 1000);
    } else if (num == 1) {
      setTimeout(function () {
        thisItem.slides1[0] = true;
        setTimeout(function () {
          thisItem.slides1[1] = true;
        }, 400);
        setTimeout(function () {
          thisItem.slides1[2] = true;
        }, 500);
        setTimeout(function () {
          thisItem.slides1[3] = true;
        }, 500);
      }, 1000);
    } else if (num == 2) {
      setTimeout(function () {
        thisItem.slides2[0] = true;
        setTimeout(function () {
          thisItem.slides2[1] = true;
        }, 400);
        setTimeout(function () {
          thisItem.slides2[2] = true;
        }, 500);
        setTimeout(function () {
          thisItem.slides2[3] = true;
        }, 500);
      }, 1000);
    }
  }


}



// animations: [
//   trigger('heroState', [
//     state('inactive', style({ 
//       opacity: 0,
//       display: 'none'
//     })),
//     state('active',   style({
//       opacity: 1,
//       display: 'flex'
//     })),
//     transition('inactive => active', animate('500ms ease-in')),
//     transition('active => inactive', animate('500ms ease-out'))
//   ]),
//   trigger('teamState', [
//     state('inactive', style({ 
//       opacity:0,
//       display: 'none'
//     })),
//     state('active',   style({
//       opacity: 1,
//       display: 'flex'
//     })),
//     transition('inactive => active', animate('10ms ease-in')),
//     transition('active => inactive', animate('500ms ease-out'))
//   ])
// ]



// aboutUsChange(num){
//   this.reset();
//   this.links[num] = true;
//   setTimeout(() => {
//     this.content[num] =  (this.content[num] === 'inactive' ? 'active' : 'inactive')
//   }, 400);

// }
// teamChange(num){
//   this.reset();
//   this.links[num] = true;
//   setTimeout(() => {
//     this.content[num] =  (this.content[num] === 'inactive' ? 'active' : 'inactive')
//   }, 400);

// }

// reset(){
//   this.links = [false,false,false,false];
//   this.content = ['inactive','inactive','inactive','inactive'];
//   this.aboutUsContent = ['inactive','inactive'];
// }




// setTimeout(function(){
//   $('.title-1').addClass('title-animate-go');
//   setTimeout(function(){
//     $('.title-2').addClass('title-animate-go');
//   },400);
//   setTimeout(function(){
//     $('.title-3').addClass('title-animate-go');
//   },500);
//   setTimeout(function(){
//     $('.title-4').addClass('title-animate-go');
//   },500);
// },1000);