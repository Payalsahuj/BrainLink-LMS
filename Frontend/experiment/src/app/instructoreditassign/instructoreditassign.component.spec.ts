import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructoreditassignComponent } from './instructoreditassign.component';

describe('InstructoreditassignComponent', () => {
  let component: InstructoreditassignComponent;
  let fixture: ComponentFixture<InstructoreditassignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructoreditassignComponent]
    });
    fixture = TestBed.createComponent(InstructoreditassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
