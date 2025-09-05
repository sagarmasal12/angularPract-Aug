import { Component, OnInit } from '@angular/core';
import { Ibankloan } from './bankload.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BankloanService } from './bankloan.service';

import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { concat } from 'rxjs';

@Component({
  selector: 'app-bankloan',
  imports: [NgFor, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './bankloan.component.html',
  styleUrl: './bankloan.component.css',
})
export class BankloanComponent implements OnInit {
  bankloan: Ibankloan[] = [];
  editId = 0;

  bankloanform!: FormGroup;

  error: string = '';

  constructor(private fb: FormBuilder, private bankSrv: BankloanService) {}

  ngOnInit(): void {
    this.bankloanform = this.fb.group({
      userId: [0],
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      fullName: [''],
      password: [''],
    });

    this.getbankLoanuser();
  }

  getbankLoanuser() {
    this.bankSrv.getloanUser().subscribe({
      next: (res: any) => {
        this.bankloan = res.data;

        const roles = this.bankloan;

        console.log('result:-', res.data);
      },
      error: (err) => {
        (this.error = 'Failed to fetch bankloan users'), err;
      },
    });
  }

  addUser() {
    const payLoad = {
      UserId: this.bankloanform.value.userId,
      UserName: this.bankloanform.value.userName,
      EmailId: this.bankloanform.value.emailId,
      FullName: this.bankloanform.value.fullName,
      Password: this.bankloanform.value.password,
    };
    console.log('Payload:', this.bankloanform.value);
    this.bankSrv.addbankUsers(payLoad).subscribe({
      next: (res: any) => {
        console.log('Response', res);
        this.getbankLoanuser();
      },
      error: (err) => {
        console.error('Invalid format', err);
      },
    });
  }

  edituser(res: Ibankloan) {
    this.bankloanform.patchValue(res);
    this.editId = res.userId;
  }

  resetForm() {
    this.bankloanform.reset();
    this.editId = 0;
  }

  deleteUser(id: number) {
    debugger;
    const result = confirm('Are you sure you want to delete');
    if (!result) return;
    this.bankSrv.onDelete(id).subscribe({
      next: (res) => {
        console.log('Deleted successfully', res);
        this.getbankLoanuser();
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
