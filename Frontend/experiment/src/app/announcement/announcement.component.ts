
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})



export class AnnouncementComponent implements OnInit {
  studentID!: number; // Assuming studentID is a number
  enrollmentData: any[] = [];
  announcementData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Step 1: Retrieve studentID from local storage
const studentIDFromStorage = localStorage.getItem('studentID');
this.studentID = studentIDFromStorage ? parseInt(studentIDFromStorage, 10) : 0; // Use a default value if 'studentID' is null or invalid


    // Step 2: Make a request to fetch enrollment data
    this.http.get<any[]>(`http://127.0.0.1:8000/brainlink/enrollments/`).subscribe((data) => {
      // Step 3: Extract course values and store them
      this.enrollmentData = data;
      const enrolledCourses = this.enrollmentData
        .filter((enrollment) => enrollment.student === this.studentID)
        .map((enrollment) => enrollment.course);

      // Step 4: Make a request to fetch announcement data
      this.http.get<any[]>(`http://127.0.0.1:8000/brainlink/announcements/`).subscribe((announcements) => {
        // Step 5: Filter announcement data based on matching course values
        this.announcementData = announcements.filter((announcement) => enrolledCourses.includes(announcement.course));
        this.announcementData.reverse();
      });
    });
  }
}
