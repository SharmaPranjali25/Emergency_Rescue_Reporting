import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 
import { DisplayEmployeeDetailsListComponent } from './display-employee-details-list/display-employee-details-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeTodayAttendanceListComponent } from './employee-today-attendance-list/employee-today-attendance-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminLoginComponent} from './admin-login/admin-login.component'

export const routes: Routes = [
    // { path: '', component: AdminLoginComponent},
    { path: 'login', component: AdminLoginComponent},
    { path: 'home', component: DashboardComponent},
    { path: 'addEmployees', component: AddEmployeeComponent },
    { path: 'displayList', component: DisplayEmployeeDetailsListComponent },
    { path: 'attendence', component: EmployeeAttendanceComponent },
    { path: 'todayAttendenceList', component: EmployeeTodayAttendanceListComponent },
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }