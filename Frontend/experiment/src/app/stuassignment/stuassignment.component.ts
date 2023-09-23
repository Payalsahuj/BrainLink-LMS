import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuassignment',
  templateUrl: './stuassignment.component.html',
  styleUrls: ['./stuassignment.component.css']
})
export class StuassignmentComponent implements OnInit {
  studentID!: number;
  enrollmentData: any[] = [];
  assignmentData: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Step 1: Retrieve studentID from local storage
    const studentIDFromStorage = localStorage.getItem('studentID');
    this.studentID = studentIDFromStorage ? parseInt(studentIDFromStorage, 10) : 0; // Use a default value if 'studentID' is null or invalid

    // Step 2: Make a request to fetch enrollment data
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/enrollments/').subscribe((enrollments) => {
      // Step 3: Filter enrollment data based on matching studentID
      const matchedCourses = enrollments.filter((enrollment) => enrollment.student === this.studentID)
                                        .map((enrollment) => enrollment.course);

      // Step 4: Make a request to fetch assignment data
      this.http.get<any[]>('http://127.0.0.1:8000/brainlink/assignments/').subscribe((assignments) => {
        // Step 5: Filter assignment data based on matching courses
        this.assignmentData = assignments.filter((assignment) => matchedCourses.includes(assignment.course));
        this.assignmentData.reverse()
      });
    });
  }

  goToAssignment(assignmentId: number): void {
    this.router.navigate(['studentassignment', assignmentId]);
  }

  
}
