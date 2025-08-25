import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Student } from '../../student.model';
import { FormsModule } from '@angular/forms';
import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [FormsModule, NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students:Student[]=[];
  newStudent:Student = {id:0,name:'',email:'',course:''};

  constructor(private studentService:StudentService){

  }
  ngOnInit(): void {
    this.loadstudents();
  }

  loadstudents(){
    this.students = this.studentService.getstudent()
  }

  addStudent(){
    this.studentService.addstudent({...this.newStudent});
    this.newStudent = {
      id:0,name:'',email:'',course:''
    };
    this.loadstudents();
  }
}
