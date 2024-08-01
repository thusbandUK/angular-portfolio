import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyContainerComponent } from './privacy-container.component';

describe('PrivacyContainerComponent', () => {
  let component: PrivacyContainerComponent;
  let fixture: ComponentFixture<PrivacyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
