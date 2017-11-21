import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaLoginComponent } from './scla-login.component';

describe('SclaLoginComponent', () => {
  let component: SclaLoginComponent;
  let fixture: ComponentFixture<SclaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
