import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorregisterComponent } from './instructorregister.component';

describe('InstructorregisterComponent', () => {
  let component: InstructorregisterComponent;
  let fixture: ComponentFixture<InstructorregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorregisterComponent]
    });
    fixture = TestBed.createComponent(InstructorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
