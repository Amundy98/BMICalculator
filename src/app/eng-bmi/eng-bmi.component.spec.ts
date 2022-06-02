import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngBMIComponent } from './eng-bmi.component';

describe('EngBMIComponent', () => {
  let component: EngBMIComponent;
  let fixture: ComponentFixture<EngBMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngBMIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngBMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
