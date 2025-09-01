import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersComponent } from './Pages/users/users.component';
import { StudentsComponent } from './Pages/students/students.component';
import { EmployeeDataComponent } from './Pages/employee-data/employee-data.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UsersComponent,
  },
  {
    path: 'student-record',
    component: StudentsComponent,
  },
  {
    path: 'emp-data',
    component: EmployeeDataComponent,
  },
  {
    path: 'product-data',
    component: ProductDataComponent,
  },
  {
    path: 'restaurant-menu',
    component: RestaurantMenuComponent,
  },
];
