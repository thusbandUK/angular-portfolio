import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusMaterialContainerComponent } from './bonus-material-container.component';

describe('BonusMaterialContainerComponent', () => {
  let component: BonusMaterialContainerComponent;
  let fixture: ComponentFixture<BonusMaterialContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusMaterialContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusMaterialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
