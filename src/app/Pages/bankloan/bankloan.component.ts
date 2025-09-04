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
      userId: [],
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      fullName: [''],
      role: [''],
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

  edituser(res: Ibankloan) {
    this.bankloanform.patchValue(res);
    this.editId = res.userId;
  }

  resetForm() {
    this.bankloanform.reset();
    this.editId = 0;
  }
}
