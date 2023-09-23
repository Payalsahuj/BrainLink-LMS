import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudashboardComponent } from './studashboard.component';

describe('StudashboardComponent', () => {
  let component: StudashboardComponent;
  let fixture: ComponentFixture<StudashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudashboardComponent]
    });
    fixture = TestBed.createComponent(StudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
