import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BusUser } from './practice.model';

@Component({
  selector: 'app-practice-api',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './practice-api.component.html',
  styleUrl: './practice-api.component.css',
})
export class PracticeApiComponent implements OnInit {
  users: BusUser[] = [];
  loading = false;
  error = '';

  bususerform: FormGroup;
  // searchText = '';
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.bususerform = this.fb.group({
      userId: [0],
      userName: ['', Validators.required],
      emailId: [''],
      fullName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.fetchUsers();
    this.getAllUser();
  }

  // fetchUsers() {
  //   this.loading = true;
  //   this.http
  //     .get<{ data: BusUser[] }>(
  //       'https://api.freeprojectapi.com/api/BusBooking/GetAllUsers'
  //     )
  //     .subscribe({
  //       next: (res) => {
  //         debugger;
  //         console.log('API Response:', res);
  //         this.users = res.data || [];
  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         this.error = 'Failed to fetch users: ' + err.message;
  //         this.loading = false;
  //       },
  //     });
  // }

  getAllUser() {
    this.http
      .get<{ data: BusUser[] }>(
        'https://api.freeprojectapi.com/api/BusBooking/GetAllUsers'
      )
      .subscribe({
        next: (res) => {
          console.log('result', res.data);
          this.users = res.data;
        },
        error: (err) => {
          this.error = 'Failed to fetch users:' + err.message;
        },
      });
  }

  addUser() {}

  // filteredUsers(): BusUser[] {
  //   const text = this.searchText.toLowerCase();
  //   return this.users.filter(
  //     (u: any) =>
  //       (u.fullName || '').toLowerCase().includes(text) ||
  //       (u.email || '').toLowerCase().includes(text)
  //   );
  // }
}
