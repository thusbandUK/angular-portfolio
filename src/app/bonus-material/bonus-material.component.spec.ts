import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusMaterialComponent } from './bonus-material.component';

describe('BonusMaterialComponent', () => {
  let component: BonusMaterialComponent;
  let fixture: ComponentFixture<BonusMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
