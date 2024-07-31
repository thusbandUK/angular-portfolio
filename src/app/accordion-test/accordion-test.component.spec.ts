import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTestComponent } from './accordion-test.component';

describe('AccordionTestComponent', () => {
  let component: AccordionTestComponent;
  let fixture: ComponentFixture<AccordionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
