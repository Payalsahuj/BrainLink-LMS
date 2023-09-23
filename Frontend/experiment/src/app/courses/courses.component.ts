import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent {
  
  courses: any[] = []; // Initialize an empty array to store courses

  constructor(private courseService: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data; // Assign the fetched courses to the 'courses' array
    });
  }

  redirectToEnrollment() {
    this.router.navigate(['/enrollment']);
  }
}
