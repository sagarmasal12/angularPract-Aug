import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusUser } from './practice.model';

@Component({
  selector: 'app-practice-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './practice-api.component.html',
  styleUrl: './practice-api.component.css',
})
export class PracticeApiComponent implements OnInit {
  users: BusUser[] = [];
  loading = false;
  error = '';
  searchText = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.http
      .get<{ data: BusUser[] }>(
        'https://api.freeprojectapi.com/api/BusBooking/GetAllUsers'
      )
      .subscribe({
        next: (res) => {
          console.log('API Response:', res);
          this.users = res.data || [];
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to fetch users: ' + err.message;
          this.loading = false;
        },
      });
  }

  filteredUsers(): BusUser[] {
    const text = this.searchText.toLowerCase();
    return this.users.filter(
      (u: any) =>
        (u.fullName || '').toLowerCase().includes(text) ||
        (u.email || '').toLowerCase().includes(text)
    );
  }
}
