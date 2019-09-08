import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentifierComponent } from './autentifier.component';

describe('AutentifierComponent', () => {
  let component: AutentifierComponent;
  let fixture: ComponentFixture<AutentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
