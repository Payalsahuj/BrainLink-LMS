import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucoursesComponent } from './stucourses.component';

describe('StucoursesComponent', () => {
  let component: StucoursesComponent;
  let fixture: ComponentFixture<StucoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StucoursesComponent]
    });
    fixture = TestBed.createComponent(StucoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
