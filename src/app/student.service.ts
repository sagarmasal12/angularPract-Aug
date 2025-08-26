import { Injectable, OnInit } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  constructor() { }
  
private students: Student[] = [];

ngOnInit(): void {
  
}
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

  if (getAllStudents && getAllStudents!=="null") {
    // parse and also update this.students so it stays in sync
    this.students = JSON.parse(getAllStudents) as Student[];
 
  }

  return this.students;
}

}
