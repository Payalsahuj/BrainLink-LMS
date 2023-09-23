import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = 'http://127.0.0.1:8000/brainlink'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departments/`);
  }

  registerInstructor(data: Instructor): Observable<any> {
    return this.http.post(`${this.apiUrl}/instructors/`, data);
  }
}
