import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { RegistrationComponent } from './patients/registration/registration.component';
import {PSignupComponent} from './patients/p-signup/p-signup.component';
import {HeaderComponent} from './mainPage/header/header.component';
import { PatientsModule } from './patients/patients.module';
import { UserAuthModule } from './user-auth/user-auth.module';
import {MainModule} from './mainPage/main.module'
import { DoctorsModule } from './doctors/doctors.module';
import { DrLoginComponent } from './doctors/dr-login/dr-login.component';
import { PLoginComponent } from './patients/p-login/p-login.component';


const routes: Routes = [
  {
    component:HeaderComponent,
    path:"",
  },
  {
    component: LoginComponent,
    path:"login",
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component:RegistrationComponent,
    path :'patients-registration'
  }
  , 
  {
    component:PSignupComponent,
    path:'patients-signup'
  }, 
{
  path:"drlogin",
  component:DrLoginComponent
},
{
  path:"patients-login",
  component:PLoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PatientsModule, UserAuthModule, MainModule,DoctorsModule],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
