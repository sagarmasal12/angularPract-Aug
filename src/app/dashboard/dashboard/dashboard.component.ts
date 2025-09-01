import { Component, signal } from '@angular/core';
import { NgForOf } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  itemList = ['sam', 'vijay'];
}
