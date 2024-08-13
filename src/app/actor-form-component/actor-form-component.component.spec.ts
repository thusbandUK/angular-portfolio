import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorFormComponentComponent } from './actor-form-component.component';

describe('ActorFormComponentComponent', () => {
  let component: ActorFormComponentComponent;
  let fixture: ComponentFixture<ActorFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
