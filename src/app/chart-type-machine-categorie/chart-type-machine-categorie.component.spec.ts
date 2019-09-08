import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypeMachineCategorieComponent } from './chart-type-machine-categorie.component';

describe('ChartTypeMachineCategorieComponent', () => {
  let component: ChartTypeMachineCategorieComponent;
  let fixture: ComponentFixture<ChartTypeMachineCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeMachineCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTypeMachineCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
