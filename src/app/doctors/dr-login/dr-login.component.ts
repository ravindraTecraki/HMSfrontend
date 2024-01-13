import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';



@Component({
  selector: 'app-dr-login',
  templateUrl: './dr-login.component.html',
  styleUrl: './dr-login.component.css'
})
export class DrLoginComponent {
  protected drlogin!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.drlogin = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
      
    })

  }

  get Email() : FormControl{
   return this.drlogin.get("email") as FormControl;
  }
  get Password() : FormControl{
    return this.drlogin.get("password") as FormControl;
  }

  drLogin(){
   this.submitted = true;
   console.log(this.drlogin.value);
  }
}
