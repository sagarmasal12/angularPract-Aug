import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  studentform: FormGroup;

  students: Student[] = [];
  nextId = 1;
  isEdit = false;
  editId = 0;

  constructor(
    private studentService: StudentService,
    private toaster: ToastrService,
    private fb: FormBuilder
  ) {
    this.studentform = this.fb.group({
      id: [0], // hidden field

      name: ['', Validators.required],
      course: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.students = this.studentService.getFromStorage();
  }

  // addStudent() {
  //   if (this.studentform.valid) {
  //     this.studentService.addStudent(this.studentform.value);
  //     this.students = this.studentService.getFromStorage();
  //     this.toaster.success('Form is succesfully submitted');
  //     this.studentform.reset();
  //   }
  // }

  ondelete(id: number) {
    this.studentService.delete(id);
    this.students = this.studentService.getFromStorage();
  }

  onEdit(student: Student) {
    this.studentform.patchValue(student);
    this.editId = student.id;
  }

  // saveEdit() {
  //   debugger;
  //   // this.studentform.value.id = this.editId;
  //   this.studentService.updateStudent(this.studentform.value);
  //   this.editId = 0;
  //   this.students = this.studentService.getFromStorage();
  // }

  onSubmit() {
    if (this.studentform.valid) {
      const student: Student = this.studentform.value;

      if (this.editId) {
        // Update existing
        const updatedStudent: Student = { ...student, id: this.editId };
        this.studentService.updateStudent(updatedStudent);
        this.toaster.success('Student updated successfully');
        this.editId = 0;
      } else {
        // Add new
        this.studentService.addStudent(student);
        this.toaster.success('Student added successfully');
      }

      this.students = this.studentService.getFromStorage();
      this.studentform.reset();
    } else {
      this.toaster.error('Please fill all required fields');
    }
  }
}
