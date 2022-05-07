import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
}) 
export class LoginModule implements OnInit{
  constructor(private router: Router, private loginService: LoginService){}
  ngOnInit(): void {
    if(this.loginService.isUserLoggedIn()){
      this.router.navigateByUrl("/idopontfoglalas");
    }
  }
}
