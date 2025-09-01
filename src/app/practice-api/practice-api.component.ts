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
import { PracticeApiService } from './practice-api.service';

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
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private userSrv: PracticeApiService
  ) {
    this.bususerform = this.fb.group({
      userId: [0],
      userName: ['', Validators.required],
      emailId: [''],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.fetchUsers();
    this.getAllUser();
  }

  getAllUser() {
    return this.http
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

  addUser() {
    if (this.bususerform.valid) {
      this.userSrv.addBusUser(this.bususerform.value).subscribe({
        next: () => {
          debugger;
          this.getAllUser();
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.getAllUser();
    } else {
      alert('Invalid');
    }
  }
}
