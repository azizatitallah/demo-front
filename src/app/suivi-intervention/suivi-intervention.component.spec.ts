import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviInterventionComponent } from './suivi-intervention.component';

describe('SuiviInterventionComponent', () => {
  let component: SuiviInterventionComponent;
  let fixture: ComponentFixture<SuiviInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
