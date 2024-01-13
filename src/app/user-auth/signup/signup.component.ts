

import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  usersignup!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth:AuthService) {}

  ngOnInit() {
    this.usersignup = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'), Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
      cnfpassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern(/^[0-9]+$/)]],
      address: ['', [Validators.required]],
    });
  }
 
  get Firstname(): FormControl {
       return this.usersignup.get('firstname') as FormControl;
     }
     get Lastname(): FormControl {
       return this.usersignup.get('lastname') as FormControl;
     }
     get Email(): FormControl {
       return this.usersignup.get('email') as FormControl;
   }
     get Password(): FormControl {
       return this.usersignup.get('password') as FormControl;
     }
     get Cnfpassword(): FormControl {
       return this.usersignup.get('cnfpassword') as FormControl;
     }
     get Address(): FormControl {
       return this.usersignup.get('address') as FormControl;
     }
     get City(): FormControl {
       return this.usersignup.get('city') as FormControl;
      }
      get State(): FormControl {
       return this.usersignup.get('state') as FormControl;
     }
     get Zip(): FormControl {
       return this.usersignup.get('zip') as FormControl;
     }


  signUp() {
    this.submitted = true;
    // Check if the form is valid before submitting
    if (this.usersignup.valid) {
      const data = this.usersignup.value;
      this.auth.adminSignup(data).subscribe(
        (response) => {
          alert('User registration successful');
        },
        (err) => {
          alert(err);
        }
      );
    }

  }
}
