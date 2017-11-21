import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaComponent } from './scla.component';

describe('SclaComponent', () => {
  let component: SclaComponent;
  let fixture: ComponentFixture<SclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
