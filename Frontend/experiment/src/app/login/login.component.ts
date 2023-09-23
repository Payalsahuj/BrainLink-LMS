import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (this.role === 'Student') {
      this.http.post('http://127.0.0.1:8000/brainlink/student-login/', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            if (response.message === 'Login successful') {
              alert('Student login successful');
              this.router.navigate(['/studentdashboard']);
            } else {
              alert('Student login failed');
            }
          },
          (error) => {
            console.error('Error:', error);
            alert('Invalid credientials');
          }
        );
    } else if (this.role === 'Instructor') {
      this.http.post('http://127.0.0.1:8000/brainlink/instructor-login/', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            if (response.message === 'Login successful') {
              alert('Instructor login successful');
              // Redirect to instructor dashboard or other page
              this.router.navigate(['/instructordashboard']);
            } else {
              alert('Instructor login failed');
            }
          },
          (error) => {
            console.error('Error:', error);
            alert('Invalid credientials');
          }
        );
    } else if (this.role === 'Administrator') {
      this.http.post('http://127.0.0.1:8000/brainlink/administrator-login/', { email: this.email, password: this.password })
        .subscribe(
          (response: any) => {
            if (response.message === 'Login successful') {
              alert('Administrator login successful');
              // Redirect to admin dashboard or other page
              this.router.navigate(['/Administratordashboard']);
            } else {
              alert('Administrator login failed');
            }
          },
          (error) => {
            console.error('Error:', error);
            alert('Invalid credientials');
          }
        );
    } else {
      alert('Please select a role');
    }
  }
}
