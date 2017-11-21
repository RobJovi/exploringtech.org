import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ display: 'block', opacity: 1 })),
      state('out', style({ display: 'none', opacity: 0 })),
      transition('* => in', [
        animate(300, keyframes([
          style({ display: 'block', offset: 0 }),
          style({ opacity: 0, offset: 0.3 }),
          style({ opacity: 1, offset: 1.0 })
        ]))
      ]),
      transition('* => out', [
        animate(350, keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 0.9 }),
          style({ display: 'none', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class AboutusComponent implements OnInit {
  links = [true, false, false, false];
  content = [true, false, false, false];
  aboutUsContent = ['inactive', 'inactive'];
  currentState = ['in', 'out', 'out', 'out'];

  constructor() { }

  ngOnInit() {
  }
  aboutUsContentChange(num){
    if (!(this.links[num] == true)) {
      this.links = [false, false, false, false];
      this.links[num] = true;
      this.changeState(num);
    }
  
  }
  changeState(num){
    this.currentState = ['out', 'out', 'out', 'out'];
    setTimeout(() => {
      this.currentState[num] = 'in';
    }, 295);
  
  }
}
