import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipComponent } from './fellowship.component';

describe('FellowshipComponent', () => {
  let component: FellowshipComponent;
  let fixture: ComponentFixture<FellowshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
