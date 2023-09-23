import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InststudentdetailsComponent } from './inststudentdetails.component';

describe('InststudentdetailsComponent', () => {
  let component: InststudentdetailsComponent;
  let fixture: ComponentFixture<InststudentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InststudentdetailsComponent]
    });
    fixture = TestBed.createComponent(InststudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
