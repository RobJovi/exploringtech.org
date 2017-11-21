import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEntrepreneurComponent } from './tech-entrepreneur.component';

describe('TechEntrepreneurComponent', () => {
  let component: TechEntrepreneurComponent;
  let fixture: ComponentFixture<TechEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
