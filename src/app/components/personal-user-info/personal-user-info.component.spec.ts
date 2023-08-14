import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUserInfoComponent } from './personal-user-info.component';

describe('PersonalUserInfoComponent', () => {
  let component: PersonalUserInfoComponent;
  let fixture: ComponentFixture<PersonalUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalUserInfoComponent]
    });
    fixture = TestBed.createComponent(PersonalUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
