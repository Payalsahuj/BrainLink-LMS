import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-instructorcreateannoun',
  templateUrl: './instructorcreateannoun.component.html',
  styleUrls: ['./instructorcreateannoun.component.css']
})
export class InstructorcreateannounComponent implements OnInit {
  courses: any[] = [];
  departments: any[] = [];
  title: string = '';
  publishDate: string = '';
  selectedDepartment: number = 0;
  selectedCourse: number = 0;
  description: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch course data from the API
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/courses/').subscribe((data) => {
      this.courses = data;
    });

    // Fetch department data from the API
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/departments/').subscribe((data) => {
      this.departments = data;
    });
  }

  addAnnouncement(): void {
    // Create an object with the form data
    const formData = {
      title: this.title,
      publish_date: this.publishDate,
      department: this.selectedDepartment,
      course: this.selectedCourse,
      description: this.description
    };

    // Make a POST request to add the announcement
    this.http.post('http://127.0.0.1:8000/brainlink/announcements/', formData)
      .subscribe(() => {
        alert('Announcement added successfully.');
        // You can optionally reset the form fields here
        this.resetForm();
      });
  }

  resetForm(): void {
    // Reset form fields to their initial values
    this.title = '';
    this.publishDate = '';
    this.selectedDepartment = 0;
    this.selectedCourse = 0;
    this.description = '';
  }
}
