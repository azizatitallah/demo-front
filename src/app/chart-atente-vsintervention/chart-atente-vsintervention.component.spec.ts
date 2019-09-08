import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAtenteVSInterventionComponent } from './chart-atente-vsintervention.component';

describe('ChartAtenteVSInterventionComponent', () => {
  let component: ChartAtenteVSInterventionComponent;
  let fixture: ComponentFixture<ChartAtenteVSInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAtenteVSInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAtenteVSInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
