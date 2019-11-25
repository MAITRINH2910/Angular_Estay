import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHotelOwnerComponent } from './all-hotel-owner.component';

describe('AllHotelOwnerComponent', () => {
  let component: AllHotelOwnerComponent;
  let fixture: ComponentFixture<AllHotelOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHotelOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHotelOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
