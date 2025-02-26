import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantAnimationComponent } from './elephant-animation.component';

describe('ElephantAnimationComponent', () => {
  let component: ElephantAnimationComponent;
  let fixture: ComponentFixture<ElephantAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElephantAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElephantAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
