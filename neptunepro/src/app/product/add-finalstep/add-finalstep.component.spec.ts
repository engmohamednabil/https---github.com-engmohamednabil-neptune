import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinalstepComponent } from './add-finalstep.component';

describe('AddFinalstepComponent', () => {
  let component: AddFinalstepComponent;
  let fixture: ComponentFixture<AddFinalstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFinalstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinalstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
