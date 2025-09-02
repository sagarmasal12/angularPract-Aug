import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { IUser } from './model/user.model';
import { NgForOf } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  imports: [NgFor],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    return this.userSrv.getUsers().subscribe({
      next: (res) => (this.users = res),
      error: (err) => console.error('Error fetching here:- ', err),
    });
  }
}
