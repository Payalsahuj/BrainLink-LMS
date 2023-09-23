import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { InstructorregisterComponent } from './instructorregister/instructorregister.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { InstructorService } from './instructor.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoursesComponent } from './courses/courses.component';
import { DashboardService } from './dashboard.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StunavbarComponent } from './stunavbar/stunavbar.component';
import { StudashboardComponent } from './studashboard/studashboard.component';
import { StucoursesComponent } from './stucourses/stucourses.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { StuassignmentComponent } from './stuassignment/stuassignment.component';
import { AssignsubmissionComponent } from './assignsubmission/assignsubmission.component';
import { InstructornavbarComponent } from './instructornavbar/instructornavbar.component';
import { InstructordashboardComponent } from './instructordashboard/instructordashboard.component';
import { InstructorecreateassignComponent } from './instructorecreateassign/instructorecreateassign.component';
import { InstructorcreateannounComponent } from './instructorcreateannoun/instructorcreateannoun.component';
import { InstructoreditassignComponent } from './instructoreditassign/instructoreditassign.component';
import { InststudentdetailsComponent } from './inststudentdetails/inststudentdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StudentregisterComponent,
    InstructorregisterComponent,
    DashboardComponent,
    LoginComponent,

    CoursesComponent,
    EnrollmentComponent,
    StunavbarComponent,
    StudashboardComponent,
    StucoursesComponent,
    AnnouncementComponent,
    StuassignmentComponent,
    AssignsubmissionComponent,
    InstructornavbarComponent,
    InstructordashboardComponent,
    InstructorecreateassignComponent,
    InstructorcreateannounComponent,
    InstructoreditassignComponent,
    InststudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [StudentService,InstructorService,DashboardService],
  bootstrap: [AppComponent]
})





export class AppModule { }
