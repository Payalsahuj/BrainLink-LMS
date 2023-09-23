import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructordashboardComponent } from './instructordashboard.component';

describe('InstructordashboardComponent', () => {
  let component: InstructordashboardComponent;
  let fixture: ComponentFixture<InstructordashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructordashboardComponent]
    });
    fixture = TestBed.createComponent(InstructordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
