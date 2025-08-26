import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../student.model';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  studentform:FormGroup;

  students:Student[]=[];
  nextId=1;

  constructor(private studentService:StudentService,
    private toaster:ToastrService,
    private fb:FormBuilder
  ){
    this.studentform= this.fb.group({
      name:['',Validators.required],
      course:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })

  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.students = this.studentService.getStudents()
  }

  // addStudent(){
  // if (
  //   this.newStudent.name.trim() !== '' &&
  //   this.newStudent.email.trim() !== '' &&
  //   this.newStudent.course.trim() !== ''
  // )   {
  //    this.studentService.addStudent({...this.newStudent});
  //   this.newStudent = {
  //     id:0,name:'',email:'',course:''
  //   };
  //   this.loadStudents();
  //   this.toaster.success("Fields add Succesfully")
  //  }
  //  else{
  //   this.toaster.info('All fields are required',"error")
  //  }
    
  // }
   addStudent() {
    if (this.studentform.valid) {
      const newStudent = {
        id: this.nextId++,
        ...this.studentform.value
      };

      this.students.push(newStudent);
      this.studentform.reset();
    } else {
      // ✅ Show validation message only if invalid
      alert('⚠️ Please fill all required fields correctly!');
    }
  }
}
