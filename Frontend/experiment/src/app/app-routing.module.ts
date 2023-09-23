import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentregisterComponent } from './studentregister/studentregister.component'; // Import the actual path for your components
import { InstructorregisterComponent } from './instructorregister/instructorregister.component'; // Import the actual path for your components

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoursesComponent } from './courses/courses.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudashboardComponent } from './studashboard/studashboard.component';
import { StucoursesComponent } from './stucourses/stucourses.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { StuassignmentComponent } from './stuassignment/stuassignment.component';
import { AssignsubmissionComponent } from './assignsubmission/assignsubmission.component';
import { InstructordashboardComponent } from './instructordashboard/instructordashboard.component';
import { InstructorecreateassignComponent } from './instructorecreateassign/instructorecreateassign.component';
import { InstructorcreateannounComponent } from './instructorcreateannoun/instructorcreateannoun.component';
import { InstructoreditassignComponent } from './instructoreditassign/instructoreditassign.component';
import { InststudentdetailsComponent } from './inststudentdetails/inststudentdetails.component';

const routes: Routes = [
  { path: '', component: DashboardComponent}, // Assuming you have a registration form at /register
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'studentcourse', component: StucoursesComponent},
  { path: 'course', component: CoursesComponent},
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'studentassignment', component: StuassignmentComponent },
  { path: 'studentassignment/:id', component: AssignsubmissionComponent },
  { path: 'studentdashboard', component: StudashboardComponent },
  { path: 'instructordashboard', component: InstructordashboardComponent },
  {path:'addassignment',component: InstructorecreateassignComponent},
  {path:'addannouncement',component: InstructorcreateannounComponent},
  {path:'addassignment/:id',component: InstructoreditassignComponent},
  { path: 'instructorregister', component: InstructorregisterComponent },
  { path: 'studentdetails', component: InststudentdetailsComponent },

  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
