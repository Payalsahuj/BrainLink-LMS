import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instructoreditassign',
  templateUrl: './instructoreditassign.component.html',
  styleUrls: ['./instructoreditassign.component.css']
})
export class InstructoreditassignComponent implements OnInit {
  assignmentId!: number;
  assignmentTitle: string = '';
  assignmentDetails: string = '';
  dueDate: string = '';
  selectedCourse: number | undefined;
  courses: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.assignmentId = +params['id']; // Get assignment ID from route params

      // Fetch assignment details using assignmentId
      this.http
        .get<any>(`http://127.0.0.1:8000/brainlink/assignments/${this.assignmentId}/`)
        .subscribe(data => {
          this.assignmentTitle = data.title;
          this.assignmentDetails = data.description;
          this.dueDate = data.due_date;
          this.selectedCourse = data.course;
        });
    });

    // Fetch courses
    this.http
      .get<any[]>('http://127.0.0.1:8000/brainlink/courses/')
      .subscribe(data => {
        this.courses = data;
      });
  }

  updateAssignment(): void {
    // Check if any field is empty
    if (!this.assignmentTitle || !this.assignmentDetails || !this.dueDate || !this.selectedCourse) {
      alert('Please fill in all fields before updating.');
      return;
    }

    // Prepare the update data
    const formData = {
      title: this.assignmentTitle,
      description: this.assignmentDetails,
      due_date: this.dueDate,
      course: this.selectedCourse
    };

    // Make a patch request to update the assignment
    this.http
      .patch(`http://127.0.0.1:8000/brainlink/assignments/${this.assignmentId}/`, formData)
      .subscribe(() => {
        alert('Assignment updated successfully.');
        this.router.navigate(['/addassignment']); // Navigate to a different route if needed
      });
  }

  deleteAssignment(): void {
    // Make a delete request to delete the assignment
    this.http
      .delete(`http://127.0.0.1:8000/brainlink/assignments/${this.assignmentId}/`)
      .subscribe(() => {
        alert('Assignment deleted successfully.');
        this.router.navigate(['/addassignment']); // Navigate to a different route if needed
      });
  }
}
