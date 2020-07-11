import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineRequirementComponent } from './guideline-requirement.component';

describe('GuidelineRequirementComponent', () => {
  let component: GuidelineRequirementComponent;
  let fixture: ComponentFixture<GuidelineRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
