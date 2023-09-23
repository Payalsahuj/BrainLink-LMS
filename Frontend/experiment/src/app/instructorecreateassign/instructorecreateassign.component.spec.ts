import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorecreateassignComponent } from './instructorecreateassign.component';

describe('InstructorecreateassignComponent', () => {
  let component: InstructorecreateassignComponent;
  let fixture: ComponentFixture<InstructorecreateassignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorecreateassignComponent]
    });
    fixture = TestBed.createComponent(InstructorecreateassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
