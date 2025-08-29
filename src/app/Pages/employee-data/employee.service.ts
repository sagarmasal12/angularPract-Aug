import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService implements OnInit {
  constructor() {
    this.getFromStorage();
  }

  private employees: Employee[] = [];

  ngOnInit(): void {}

  saveToStorage() {
    localStorage.setItem('myEmployees', JSON.stringify(this.employees));
  }

  getFromStorage(): Employee[] {
    let temp = localStorage.getItem('myEmployees');
    if (temp) {
      this.employees = JSON.parse(temp);
      return this.employees;
    }
    return [];
  }

  addEmployee(emp: Employee) {
    let newId =
      this.employees.length > 0
        ? Math.max(...this.employees.map((s) => s.id ?? 0)) + 1
        : 1;

    emp.id = newId;
    this.employees.push(emp);
    this.saveToStorage();
  }

  delete(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
    this.saveToStorage();
  }

  updateEmp(updateEmoList: Employee) {
    let index = this.employees.findIndex((emp) => emp.id == updateEmoList.id);
    if (index >= 0) {
      this.employees = this.getFromStorage();
      this.employees[index] = updateEmoList;
      console.log(this.employees);

      this.saveToStorage();
    }
  }
}
