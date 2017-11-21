import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaRecoverUserComponent } from './scla-recover-user.component';

describe('SclaRecoverUserComponent', () => {
  let component: SclaRecoverUserComponent;
  let fixture: ComponentFixture<SclaRecoverUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaRecoverUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaRecoverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
