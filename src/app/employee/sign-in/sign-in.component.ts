import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {EmployeeService} from '../../employee-service/employee.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  
  ngOnInit() {
    if(this.employeeService.isLoggedIn())
    this.router.navigateByUrl('/employeeProfile');
  }

  onSubmit(form : NgForm){
    this.employeeService.login(form.value).subscribe(
      res => {
        this.employeeService.setToken(res['token']);
        this.router.navigateByUrl('/employeeProfile');
      },
      err => {
       
      }
    );
  }

}
