import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUser } from './user.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  imports: [CommonModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent implements OnInit {
  userForm!: FormGroup;
  users: IUser[] = [];
  editingUserId: number | null = null;
  nextId = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
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
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formValue = this.userForm.value as IUser;

    if (this.editingUserId === null) {
      formValue.userId = this.nextId++;
      this.users.push({ ...formValue });
    } else {
      const index = this.users.findIndex(
        (u) => u.userId === this.editingUserId
      );
      if (index > -1) {
        this.users[index] = { ...formValue, userId: this.editingUserId };
      }
      this.editingUserId = null;
    }

    this.resetForm();
  }

  editUser(user: IUser) {
    this.editingUserId = user.userId;
    this.userForm.patchValue({ ...user });
  }

  deleteUser(userId: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.users = this.users.filter((u) => u.userId !== userId);
    }
  }

  resetForm() {
    this.userForm.reset({ userId: 0 });
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
    this.editingUserId = null;
  }
}
