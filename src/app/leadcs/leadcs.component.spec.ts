import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadcsComponent } from './leadcs.component';

describe('LeadcsComponent', () => {
  let component: LeadcsComponent;
  let fixture: ComponentFixture<LeadcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
