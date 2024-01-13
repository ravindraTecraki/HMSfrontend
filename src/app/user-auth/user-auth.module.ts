import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {  FormsModule, ReactiveFormsModule }  from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  exports: [],
})
export class UserAuthModule {}
