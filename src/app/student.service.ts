import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private students:Student[]=[
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Angular' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'React' }
  ]

  getstudent:Student[]{
    return this.students;
  }


}
