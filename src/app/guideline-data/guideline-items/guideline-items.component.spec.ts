import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineItemsComponent } from './guideline-items.component';

describe('GuidelineItemsComponent', () => {
  let component: GuidelineItemsComponent;
  let fixture: ComponentFixture<GuidelineItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
