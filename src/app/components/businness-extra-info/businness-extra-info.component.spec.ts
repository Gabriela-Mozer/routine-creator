import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinnessExtraInfoComponent } from './businness-extra-info.component';

describe('BusinnessExtraInfoComponent', () => {
  let component: BusinnessExtraInfoComponent;
  let fixture: ComponentFixture<BusinnessExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinnessExtraInfoComponent]
    });
    fixture = TestBed.createComponent(BusinnessExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
