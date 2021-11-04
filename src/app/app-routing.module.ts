import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from '../app/employee/employee.component';
import { SignUpComponent } from '../app/employee/sign-up/sign-up.component';
import { EmployeeProfileComponent } from '../app/employee-profile/employee-profile.component';
import { SignInComponent } from '../app/employee/sign-in/sign-in.component';
import { EmployeeService } from '../app/employee-service/employee.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { Routes } from '@angular/router';

 const routes: Routes = [
  {
      path: 'signup', component: EmployeeComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: EmployeeComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  {
      path: 'employeeProfile', component: EmployeeProfileComponent,canActivate:[AuthGuard]
  },
  {
      path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
