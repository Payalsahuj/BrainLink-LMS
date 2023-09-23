
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructorregister',
  templateUrl: './instructorregister.component.html',
  styleUrls: ['./instructorregister.component.css']
})
export class InstructorregisterComponent implements OnInit {
  instructorForm!: FormGroup;
  departments: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.instructorForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact_number: [''],
      dob: [''],
      department: ['', Validators.required],
      gender: ['Male', Validators.required]
    });

    this.instructorService.getDepartments().subscribe(
      (data) => {
        console.log('Departments data:', data);
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
      }
    );
  }

  onSubmit() {
    if (this.instructorForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }

    const formData = this.instructorForm.value;
    this.instructorService.registerInstructor(formData).subscribe(
      (response) => {
        console.log('Registration successful', response);
      },
      (error) => {
        console.error('Registration error', error);
      }
    );
  }
}

