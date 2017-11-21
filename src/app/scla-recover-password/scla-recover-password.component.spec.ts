import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaRecoverPasswordComponent } from './scla-recover-password.component';

describe('SclaRecoverPasswordComponent', () => {
  let component: SclaRecoverPasswordComponent;
  let fixture: ComponentFixture<SclaRecoverPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaRecoverPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
