import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeStylingComponent } from './alternative-styling.component';

describe('AlternativeStylingComponent', () => {
  let component: AlternativeStylingComponent;
  let fixture: ComponentFixture<AlternativeStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternativeStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativeStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
