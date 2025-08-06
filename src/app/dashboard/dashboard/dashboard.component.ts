import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // ✅ Create a signal with initial value 0
  count = signal(0);
  // count = continm(0) ;

  // ✅ Method to increase the count
  increment() {
    debugger
    this.count.set(this.count() + 1);
  }

  // ✅ Method to reset the count
  reset() {
    debugger
    this.count.set(0);
  }
}
function continm(arg0: number) {
  throw new Error('Function not implemented.');
}

