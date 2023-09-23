import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructornavbarComponent } from './instructornavbar.component';

describe('InstructornavbarComponent', () => {
  let component: InstructornavbarComponent;
  let fixture: ComponentFixture<InstructornavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructornavbarComponent]
    });
    fixture = TestBed.createComponent(InstructornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
