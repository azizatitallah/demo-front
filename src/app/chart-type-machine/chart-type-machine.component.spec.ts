import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypeMachineComponent } from './chart-type-machine.component';

describe('ChartTypeMachineComponent', () => {
  let component: ChartTypeMachineComponent;
  let fixture: ComponentFixture<ChartTypeMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
