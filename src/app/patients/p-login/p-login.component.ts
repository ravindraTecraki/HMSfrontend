import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrl: './p-login.component.css'
})
export class PLoginComponent {
  protected plogin!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.plogin = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
      
    })

  }

  get Email() : FormControl{
   return this.plogin.get("email") as FormControl;
  }
  get Password() : FormControl{
    return this.plogin.get("password") as FormControl;
  }

  pLogin(){
   this.submitted = true;
   console.log(this.plogin.value);
  }
}
