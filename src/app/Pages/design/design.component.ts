import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-design',
  imports: [NgIf],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class DesignComponent {
  imagePath = 'assets/images/bg-top.svg';

  hideDiv: boolean = false;

  toggleDiv(event: any) {
    // console.log(event);
    this.hideDiv = event.target.checked;
  }
}
