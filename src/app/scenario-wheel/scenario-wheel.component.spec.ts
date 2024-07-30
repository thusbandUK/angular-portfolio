import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioWheelComponent } from './scenario-wheel.component';

describe('ScenarioWheelComponent', () => {
  let component: ScenarioWheelComponent;
  let fixture: ComponentFixture<ScenarioWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioWheelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
