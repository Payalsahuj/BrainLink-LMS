import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.initForm();
    const studentIdParam = this.route.snapshot.paramMap.get('id');

    if (studentIdParam !== null) {
      const studentId = +studentIdParam;
      if (!isNaN(studentId)) {
        if (studentId === -1) {
          this.isEditMode = false;
        } else {
          this.isEditMode = true;
          this.loadStudentForEdit(studentId);
        }
      } else {
        console.error('Invalid student ID:', studentIdParam);
      }
    } else {
      console.error('Student ID is missing.');
    }
  }
  initForm():void{
    this.studentForm=this.formBuilder.group({
      name: ['', Validators.required],
      gender: [''],
      dob: [''],
      major: [''],
      email: ['', Validators.email],
      contact_number: [''],
      password:['']
    })

    
  }

  

  loadStudentForEdit(id:number): void{
    this.studentService.getStudent(id).subscribe(
      student=>{
        this.studentForm.patchValue(student);
      },
      error=>{
        console.error('Error loading student:', error)
      }
    )
  }

  saveStudent(): void{
    if(this.studentForm.valid){
      const studentData=this.studentForm.value;
      if (!studentData.name || !studentData.email || !studentData.password || !studentData.dob || !studentData.major || !studentData.contact_number) {
        alert('Please fill in all required fields.');
        return;
      }
      localStorage.setItem('name', studentData.name);
      if(this.isEditMode){
        const studentId= +this.route.snapshot.paramMap.get('id')!;
        this.studentService.updateStudent(studentId, studentData).subscribe(
          ()=>{
            alert('Student detail Edit sucessfull')
            this.studentForm.reset();
            
          },
          error=>{
            console.error('Error updating student:', error);
          }
        )
      }else{
        this.studentService.createStudent(studentData).subscribe(
          ()=>{
            alert('student registered sucessfully')
            this.studentForm.reset();
            
          },
          error=>{
            console.error('Error creating student:', error);
          }
        )
      }
      
    }else {
      alert('Please fill in all required fields.');
    }
  }

}