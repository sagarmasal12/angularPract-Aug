import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersComponent } from './Pages/users/users.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,UsersComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-aug';
}
