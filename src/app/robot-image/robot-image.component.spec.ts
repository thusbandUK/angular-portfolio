import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotImageComponent } from './robot-image.component';

describe('RobotImageComponent', () => {
  let component: RobotImageComponent;
  let fixture: ComponentFixture<RobotImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
