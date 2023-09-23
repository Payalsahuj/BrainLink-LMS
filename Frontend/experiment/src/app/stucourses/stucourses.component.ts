
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stucourses',
  templateUrl: './stucourses.component.html',
  styleUrls: ['./stucourses.component.css']
})
export class StucoursesComponent implements OnInit {
  studentId: number | null = null;
  courses: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Retrieve the student ID from localStorage
    const storedStudentId = localStorage.getItem('studentID');

    if (storedStudentId !== null) {
      // Convert the storedStudentId to a number
      this.studentId = +storedStudentId;
      
      // Make a GET request to fetch enrollment data
      this.fetchEnrollmentsForStudent(this.studentId);
    } else {
      // Handle the case when 'student_id' is not available in localStorage
      console.error("'student_id' not found in localStorage.");
    }
  }

  fetchEnrollmentsForStudent(studentId: number): void {
    // Make a GET request to fetch enrollment data
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/enrollments/').subscribe(data => {
      // Filter the enrollment data to find courses matching the student's ID
      const filteredEnrollments = data.filter(enrollment => enrollment.student === studentId);
      
      // Extract course IDs from filtered enrollments
      const courseIds = filteredEnrollments.map(enrollment => enrollment.course);
      
      // Make a GET request to fetch course details for the filtered course IDs
      this.fetchCourses(courseIds);
    }, error => {
      console.error('Error fetching enrollments:', error);
    });
  }

  fetchCourses(courseIds: number[]): void {
    // Make a GET request to fetch course details for the specified course IDs
    this.http.get<any[]>('http://127.0.0.1:8000/brainlink/courses/').subscribe(data => {
      // Filter the courses based on course IDs
      this.courses = data.filter(course => courseIds.includes(course.id));
    }, error => {
      console.error('Error fetching courses:', error);
    });
  }
}
