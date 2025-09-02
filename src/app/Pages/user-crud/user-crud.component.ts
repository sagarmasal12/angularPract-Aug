import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { IUser } from './model/user.model';
import { NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent implements OnInit {
  users: IUser[] = [];

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userSrv: UserService) {}

  ngOnInit(): void {
    this.loadUsers();

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      phone: [''],
    });
    console.log(this.userForm.value);
  }

  loadUsers() {
    this.userSrv.getUsers().subscribe({
      next: (res) => (this.users = res),
      error: (err) => console.error('Error fetching here:- ', err),
    });
    console.log('get the usersInfo:- ', this.users);
  }

  saveUser() {}
}
