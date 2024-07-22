import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigProjectContainerComponent } from './big-project-container.component';

describe('BigProjectContainerComponent', () => {
  let component: BigProjectContainerComponent;
  let fixture: ComponentFixture<BigProjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigProjectContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
