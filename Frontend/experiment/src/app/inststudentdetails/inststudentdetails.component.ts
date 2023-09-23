import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inststudentdetails',
  templateUrl: './inststudentdetails.component.html',
  styleUrls: ['./inststudentdetails.component.css']
})
export class InststudentdetailsComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<any[]>('http://127.0.0.1:8000/brainlink/students/').subscribe((data) => {
          this.students = data;
      });
  }
}
