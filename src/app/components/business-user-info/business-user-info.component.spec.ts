import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserInfoComponent } from './business-user-info.component';

describe('BusinessUserInfoComponent', () => {
  let component: BusinessUserInfoComponent;
  let fixture: ComponentFixture<BusinessUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessUserInfoComponent]
    });
    fixture = TestBed.createComponent(BusinessUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
