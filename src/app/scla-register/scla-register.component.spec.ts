import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaRegisterComponent } from './scla-register.component';

describe('SclaRegisterComponent', () => {
  let component: SclaRegisterComponent;
  let fixture: ComponentFixture<SclaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
