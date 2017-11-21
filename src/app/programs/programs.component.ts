import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../animations/index';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]':''}
})
export class ProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
