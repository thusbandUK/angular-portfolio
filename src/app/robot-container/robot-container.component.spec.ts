import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotContainerComponent } from './robot-container.component';

describe('RobotContainerComponent', () => {
  let component: RobotContainerComponent;
  let fixture: ComponentFixture<RobotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
