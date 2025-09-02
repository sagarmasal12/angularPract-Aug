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
import { subscribeOn } from 'rxjs';

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
    const localData = localStorage.getItem('user');
    if (localData) {
      this.users = JSON.parse(localData);
    } else {
      this.userSrv.getUsers().subscribe({
        next: (res) => {
          this.users = res;
          localStorage.setItem('user', JSON.stringify(this.users));
        },
        error: (err) => console.error('Error fetching here:- ', err),
      });
    }

    console.log('get the usersInfo:- ', this.users);
  }

  saveUser() {
    this.userForm.value;
    console.log(this.userForm.value);
    this.userSrv.adduser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('only for the res data:', res);

        this.users.push(res);
        localStorage.setItem('user', JSON.stringify(this.users));
        console.log('with push data', this.users.push(res));

        // this.userForm.reset();
      },
    });
  }
}
