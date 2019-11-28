import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHostHomestayComponent } from './all-host-homestay.component';

describe('AllHostHomestayComponent', () => {
  let component: AllHostHomestayComponent;
  let fixture: ComponentFixture<AllHostHomestayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHostHomestayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHostHomestayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
