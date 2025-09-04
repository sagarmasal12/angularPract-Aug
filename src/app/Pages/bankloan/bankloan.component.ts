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

@Component({
  selector: 'app-bankloan',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './bankloan.component.html',
  styleUrl: './bankloan.component.css',
})
export class BankloanComponent implements OnInit {
  bankloan: Ibankloan[] = [];

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

        console.log('result:-', res.data);
      },
      error: (err) => {
        (this.error = 'Failed to fetch bankloan users'), err;
      },
    });
  }
}
