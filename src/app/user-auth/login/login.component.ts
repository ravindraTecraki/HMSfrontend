import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent{

  protected login!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.login = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
      
    })

  }

  get Email() : FormControl{
   return this.login.get("email") as FormControl;
  }
  get Password() : FormControl{
    return this.login.get("password") as FormControl;
  }

  userLogin(){
   this.submitted = true;
   console.log(this.login.value);
  }
}
