import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclaFormComponent } from './scla-form.component';

describe('SclaFormComponent', () => {
  let component: SclaFormComponent;
  let fixture: ComponentFixture<SclaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
