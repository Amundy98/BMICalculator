import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBMIComponent } from './metric-bmi.component';

describe('MetricBMIComponent', () => {
  let component: MetricBMIComponent;
  let fixture: ComponentFixture<MetricBMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricBMIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
