import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://127.0.0.1:8000/brainlink/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl)
  }
  getStudent(id:number): Observable<Student>{
    const url=`${this.baseUrl}${id}/`
    return this.http.get<Student>(url)

  }
  createStudent(studentData:Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl, studentData)
  }
  updateStudent(id:number, studentData:Student): Observable<Student>{
    const url=`${this.baseUrl}${id}/`
    return this.http.put<Student>(url, studentData)
  }
  deleteStudent(id:number): Observable<void>{
    const url = `${this.baseUrl}${id}/`;
    return this.http.delete<void>(url)
  }
}