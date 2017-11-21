import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTalkComponent } from './tech-talk.component';

describe('TechTalkComponent', () => {
  let component: TechTalkComponent;
  let fixture: ComponentFixture<TechTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
