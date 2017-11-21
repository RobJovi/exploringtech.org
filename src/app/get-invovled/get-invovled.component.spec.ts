import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvovledComponent } from './get-invovled.component';

describe('GetInvovledComponent', () => {
  let component: GetInvovledComponent;
  let fixture: ComponentFixture<GetInvovledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvovledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvovledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
