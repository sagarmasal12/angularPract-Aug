import { Injectable, OnInit } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService implements OnInit {
  constructor() {
    this.getFromStorage();
  }

  private students: Student[] = [];

  ngOnInit(): void {}

  saveToStorage() {
    localStorage.setItem('myStudents', JSON.stringify(this.students));
  }

  getFromStorage(): Student[] {
    let temp = localStorage.getItem('myStudents');
    if (temp) {
      this.students = JSON.parse(temp);
      return this.students;
    }
    return [];
  }

  addStudent(student: Student) {
    let newId =
      this.students.length > 0
        ? Math.max(...this.students.map((s) => s.id ?? 0)) + 1
        : 1;

    student.id = newId;
    this.students.push(student);

    this.saveToStorage();
  }
}
