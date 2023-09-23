import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorcreateannounComponent } from './instructorcreateannoun.component';

describe('InstructorcreateannounComponent', () => {
  let component: InstructorcreateannounComponent;
  let fixture: ComponentFixture<InstructorcreateannounComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorcreateannounComponent]
    });
    fixture = TestBed.createComponent(InstructorcreateannounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
