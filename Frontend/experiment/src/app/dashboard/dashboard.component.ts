import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'; // Import the CourseService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: any[] = []; // Initialize an empty array to store courses

  constructor(private courseService: DashboardService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data; // Assign the fetched courses to the 'courses' array
    });
  }
}
