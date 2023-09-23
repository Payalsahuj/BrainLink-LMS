
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instructorecreateassign',
  templateUrl: './instructorecreateassign.component.html',
  styleUrls: ['./instructorecreateassign.component.css']
})
export class InstructorecreateassignComponent implements OnInit{
  courses: any[] = [];
  assignmentTitle: string = '';
  assignmentDetails: string = '';
  dueDate: string = '';
  selectedCourse:string = '';
  assignmentList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Fetch course data
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/courses/').subscribe((data) => {
      this.courses = data;
    });

    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/assignments/').subscribe((data) => {
      this.assignmentList = data;
      this.assignmentList.reverse()
    });
  }

  navigateToUpdateDelete(assignmentId: number): void {
    // Use the Router to navigate to the "/addassignment/:id" route
    this.router.navigate(['/addassignment', assignmentId]);
  }
  

  addAssignment(courseId: string): void {
    if (!this.assignmentTitle || !this.assignmentDetails || !this.dueDate || !courseId) {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare data for the POST request
    const postData = {
      title: this.assignmentTitle,
      description: this.assignmentDetails,
      due_date: this.dueDate,
      course: courseId
    };

    // Send a POST request to create the assignment
    this.http.post('http://127.0.0.1:8000/brainlink/assignments/', postData).subscribe(
      (response) => {
        alert('Assignment created successfully.');
        // Clear form fields if needed
        this.assignmentTitle = '';
        this.assignmentDetails = '';
        this.dueDate = '';
        this.selectedCourse = '';
      },
      (error) => {
        console.error('Error creating assignment:', error);
        alert('Assignment creation failed.');
      }
    );
  }
}
