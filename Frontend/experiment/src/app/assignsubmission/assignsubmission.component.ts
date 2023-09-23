import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignsubmission',
  templateUrl: './assignsubmission.component.html',
  styleUrls: ['./assignsubmission.component.css']
})
export class AssignsubmissionComponent implements OnInit {
  assignmentId!: number;
  assignmentDetails: any; // Store assignment details
  descriptionParagraphs: string[] = [];
  submissionLink: string = ''; // Variable to store the submission link

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Get assignment ID from route params
    this.route.params.subscribe(params => {
      this.assignmentId = +params['id']; // Convert to a number

      // Fetch assignment details using assignmentId
      this.http.get<any>(`http://127.0.0.1:8000/brainlink/assignments/${this.assignmentId}/`).subscribe(data => {
        this.assignmentDetails = data; // Store assignment details
        if (this.assignmentDetails.description) {
          this.descriptionParagraphs = this.assignmentDetails.description.split(/\r?\n+/);
        }
      });
    });
  }

  // Function to submit the assignment
  submitAssignment(): void {
    // Send a PATCH request to update assignmentsub with the submission link
    this.http
      .patch(`http://127.0.0.1:8000/brainlink/assignments/${this.assignmentId}/`, {
        assignmentsub: this.submissionLink
      })
      .subscribe(response => {
        // Handle the response, e.g., show a success message
        alert('Assignment submitted successfully');
        this.router.navigate(['/studentassignment']);
      });
  }
}
