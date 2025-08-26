import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../student.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  imports: [FormsModule, NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students:Student[]=[];
  newStudent:Student = {id:0,name:'',email:'',course:''};

  constructor(private studentService:StudentService,
    private toaster:ToastrService
  ){

  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.students = this.studentService.getStudents()
  }

  addStudent(){
  if (
    this.newStudent.name.trim() !== '' &&
    this.newStudent.email.trim() !== '' &&
    this.newStudent.course.trim() !== ''
  )   {
     this.studentService.addStudent({...this.newStudent});
    this.newStudent = {
      id:0,name:'',email:'',course:''
    };
    this.loadStudents();
    this.toaster.warning("Fields add Succesfully")
   }
   else{
    this.toaster.info('All fields are required',"error")
   }
    
  }
}
