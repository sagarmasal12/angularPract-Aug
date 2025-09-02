import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUser } from './user.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-crud',
  imports: [CommonModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent implements OnInit {
  userForm!: FormGroup;
  users: IUser[] = [];

  constructor(private fb: FormBuilder, private userSrv: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userId: [0],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      emailId: ['', [Validators.required, Validators.email]],
      altMobileNo: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.userForm.controls;
    console.log(this.userForm);
  }

  onSubmit() {
    if (this.userForm.invalid) return;
    this.userSrv.addUser(this.userForm.value).subscribe({
      next: (res) => {
        alert('User Add Successfully');
      },
    });
  }
}
