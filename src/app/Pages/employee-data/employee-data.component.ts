import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-data',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent implements OnInit {
  employeeForm: FormGroup;

  employees: Employee[] = [];

  editId = 0;

  constructor(private fb: FormBuilder, private empService: EmployeeService) {
    this.employeeForm = this.fb.group({
      id: [0],
      fname: ['', Validators.required],
      lname: [''],
      state: ['', Validators.required],
      district: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNum: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

      projectName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.employees = this.empService.getFromStorage();
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.empService.addEmployee(this.employeeForm.value);
      this.employees = this.empService.getFromStorage();
      this.employeeForm.reset();
    } else {
      alert('Invalid form');
    }
  }

  onDelete(emp: Employee) {
    this.empService.delete(emp.id);
    this.employees = this.empService.getFromStorage();
  }

  onEdit(emp: Employee) {
    this.employeeForm.patchValue(emp);
    this.editId = emp.id;
    console.log(this.editId);
  }

  updateEmp() {
    if (this.employeeForm.valid) {
      // const emps: Employee = this.employeeForm.value;
      if (this.editId) {
        // const updateEmps: Employee = {
        //   ...emps,
        //   id: this.editId,
        // };
        this.empService.updateEmp(this.employeeForm.value);
        this.editId = 0;
        this.employees = this.empService.getFromStorage();
        this.employeeForm.reset();
      }
    } else {
      alert('Invalis status');
    }
  }
}
