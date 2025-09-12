import { Routes } from '@angular/router';
import { UsersComponent } from './Pages/users/users.component';
import { StudentsComponent } from './Pages/students/students.component';
import { EmployeeDataComponent } from './Pages/employee-data/employee-data.component';
import { ProductDataComponent } from './Pages/product-data/product-data.component';
import { PracticeApiComponent } from './Pages/practice-api/practice-api.component';
import { UserCrudComponent } from './Pages/user-crud/user-crud.component';
import { BankloanComponent } from './Pages/bankloan/bankloan.component';
import { DesignComponent } from './Pages/design/design.component';

export const routes: Routes = [
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
    path: 'practiceapi',
    component: PracticeApiComponent,
  },
  {
    path: 'user-crud',
    component: UserCrudComponent,
  },
  {
    path: 'bankloan',
    component: BankloanComponent,
  },
  {
    path: 'design',
    component: DesignComponent,
  },
];
