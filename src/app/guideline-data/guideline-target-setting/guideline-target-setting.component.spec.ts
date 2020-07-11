import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineTargetSettingComponent } from './guideline-target-setting.component';

describe('GuidelineTargetSettingComponent', () => {
  let component: GuidelineTargetSettingComponent;
  let fixture: ComponentFixture<GuidelineTargetSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineTargetSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineTargetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
