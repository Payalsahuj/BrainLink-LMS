import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuassignmentComponent } from './stuassignment.component';

describe('StuassignmentComponent', () => {
  let component: StuassignmentComponent;
  let fixture: ComponentFixture<StuassignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuassignmentComponent]
    });
    fixture = TestBed.createComponent(StuassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
