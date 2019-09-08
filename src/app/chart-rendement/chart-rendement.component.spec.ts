import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRendementComponent } from './chart-rendement.component';

describe('ChartRendementComponent', () => {
  let component: ChartRendementComponent;
  let fixture: ComponentFixture<ChartRendementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRendementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRendementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
