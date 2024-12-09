import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInitialstepComponent } from './add-initialstep.component';

describe('AddInitialstepComponent', () => {
  let component: AddInitialstepComponent;
  let fixture: ComponentFixture<AddInitialstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInitialstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInitialstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
