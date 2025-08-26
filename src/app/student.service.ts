import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

//   private students:Student[]=[];

  

//   //add student
//   addstudent(student:Student){
//     student.id = this.students.length+1;
//     this.students.push(student);
//     localStorage.setItem("myStudent",JSON.stringify(this.students))
//   }
//   getstudent():Student[]{
//  let getAllstudents = JSON.parse(localStorage.getItem("myStudent")) 
//     return this.students 

//   }

private students: Student[] = [];

// add student
addStudent(student: Student) {
  student.id = this.students.length + 1;

  // Update the local array
  this.students.push(student);

  // Save to localStorage
  localStorage.setItem("myStudent", JSON.stringify(this.students));
}

getStudents(): Student[] {
  const getAllStudents = localStorage.getItem("myStudent");

  if (getAllStudents) {
    // parse and also update this.students so it stays in sync
    this.students = JSON.parse(getAllStudents) as Student[];
  }

  return this.students;
}

}
