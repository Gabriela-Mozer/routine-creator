import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothUserInfoComponent } from './both-user-info.component';

describe('BothUserInfoComponent', () => {
  let component: BothUserInfoComponent;
  let fixture: ComponentFixture<BothUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BothUserInfoComponent]
    });
    fixture = TestBed.createComponent(BothUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
