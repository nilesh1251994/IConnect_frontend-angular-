import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from '../app/employee-service/employee.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignInComponent } from './employee/sign-in/sign-in.component';
import { SignUpComponent } from './employee/sign-up/sign-up.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SignInComponent,
    SignUpComponent,
    EmployeeProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


