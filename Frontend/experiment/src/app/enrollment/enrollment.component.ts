import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  courses: any[] = []; // Initialize an empty array to store courses

  constructor(private courseService: DashboardService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data; // Assign the fetched courses to the 'courses' array
    });
  }

  // Function to get the student ID based on the name
  getStudentIdByName(name: string): Promise<number | null> {
    return fetch('http://127.0.0.1:8000/brainlink/students/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(students => {
        const student = students.find((student: any) => student.name === name);
        localStorage.setItem("studentID",student.id)
        return student ? student.id : null;
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
        return null;
      });
  }

  // Function to get the course ID based on the course name
  getCourseIdByName(courseName: string): Promise<number | null> {
    return fetch('http://127.0.0.1:8000/brainlink/courses/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(courses => {
        const course = courses.find((course: any) => course.course_name === courseName);
        
        return course ? course.id : null;
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
        return null;
      });
  }

  async enrollCourses(): Promise<void> {
    const name = localStorage.getItem('name');
    const selectedCourse = (document.getElementById('courseSelect') as HTMLSelectElement).value;

    if (!name) {
      alert('Enter your details first');
    } else if (selectedCourse) {
      // Get the student ID by name
      const studentId = await this.getStudentIdByName(name);

      if (studentId !== null) {
        // Get the course ID by course name
        const courseId = await this.getCourseIdByName(selectedCourse);

        if (courseId !== null) {
          // Prepare data for the POST request
          const postData = {
            student: studentId,
            course: courseId,
          };

          // Send a POST request to your backend
          fetch('http://127.0.0.1:8000/brainlink/enrollments/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          })
            .then(response => {
              if (response.ok) {
                alert('Enrollment successful');
              } else {
                response.json().then(data => {
                  console.error('Enrollment failed:', data);
                  alert('Enrollment failed');
                });
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
        } else {
          alert('Course not found');
        }
      } else {
        alert('Student not found');
      }
    } else {
      alert('Select a course before enrolling');
    }
  }
}
