import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthermotorsComponent } from './othermotors.component';

describe('OthermotorsComponent', () => {
  let component: OthermotorsComponent;
  let fixture: ComponentFixture<OthermotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthermotorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthermotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
