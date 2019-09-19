import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSortantComponent } from './liste-sortant.component';

describe('ListeSortantComponent', () => {
  let component: ListeSortantComponent;
  let fixture: ComponentFixture<ListeSortantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSortantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSortantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
