import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVaccinationsComponent } from './manage-vaccinations.component';

describe('ManageVaccinationsComponent', () => {
  let component: ManageVaccinationsComponent;
  let fixture: ComponentFixture<ManageVaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVaccinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
