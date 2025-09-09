import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { IUser } from './model/user.model';
import { JsonPipe, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  imports: [NgFor, FormsModule, ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent implements OnInit {
  users: IUser[] = [];

  userForm!: FormGroup;

  editId = 0;

  // hideTable: boolean = false;

  constructor(private fb: FormBuilder, private userSrv: UserService) {}

  ngOnInit(): void {
    this.loadUsers();

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
    });
    console.log(this.userForm.value);
  }

  loadUsers() {
    debugger;
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

  // toggleTable(event: any) {
  //   console.log(event);

  //   this.hideTable = event.target.checked;
  // }

  saveUser() {
    // this.userForm.value;
    // console.log(this.userForm.value);
    if (this.userForm.invalid) {
      alert('Form is Invalid');
    }
    this.userSrv.adduser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('only for the res data:', res);

        this.users.push(res);
        localStorage.setItem('user', JSON.stringify(this.users));
        // console.log('with push data', this.users.push(res));

        this.userForm.reset();
      },
    });
  }

  onEdit(res: IUser) {
    this.userForm.patchValue(res);
    // this.editId = res.id;
  }

  updateusers() {
    // if (this.editId) {
    //   if (this.editId <= 10) {
    //     this.userSrv.updateUser(this.editId, this.userForm.value).subscribe({
    //       next: (updateUser) => {
    //         const index = this.users.findIndex((u) => u.id === this.editId);
    //         if (index !== -1) {
    //           this.users[index] = { id: this.editId, ...this.userForm.value };
    //         }
    //         localStorage.setItem('user', JSON.stringify(this.users));
    //         this.editId = 0;
    //         this.userForm.reset();
    //       },
    //       error: (err) => {
    //         console.error('Error updating user:-', err);
    //       },
    //     });
    //   } else {
    //     const index = this.users.findIndex((u) => u.id === this.editId);
    //     if (index !== -1) {
    //       this.users[index] = { id: this.editId, ...this.userForm.value };
    //     }
    //     localStorage.setItem('user', JSON.stringify(this.users));
    //     this.userForm.reset();
    //     console.log('User updated locally (id > 10)');
    //   }
    // }
  }

  onDelete(usr: IUser) {
    // this.userSrv.deleteUser(usr.id).subscribe({
    //   next: () => {
    //     this.users = this.users.filter((u) => u.id !== usr.id);
    //     localStorage.setItem('user', JSON.stringify(this.users));
    //     console.log(`User with Id ${usr.id} deleted`);
    //   },
    //   error: (err) => console.error('Error deleting user:', err),
    // });
  }
}
