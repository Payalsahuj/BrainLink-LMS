import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignsubmissionComponent } from './assignsubmission.component';

describe('AssignsubmissionComponent', () => {
  let component: AssignsubmissionComponent;
  let fixture: ComponentFixture<AssignsubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignsubmissionComponent]
    });
    fixture = TestBed.createComponent(AssignsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
