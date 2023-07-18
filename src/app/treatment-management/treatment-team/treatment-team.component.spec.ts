import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentTeamComponent } from './treatment-team.component';

describe('TreatmentTeamComponent', () => {
  let component: TreatmentTeamComponent;
  let fixture: ComponentFixture<TreatmentTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
