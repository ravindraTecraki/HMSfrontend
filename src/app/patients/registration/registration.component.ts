import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from './../../service/auth.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  //---------------------------------------//
  // this is the code for captcha and validation
  //------------------------------------------//

  protected patients_registration!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth:AuthService) { }

  ngOnInit() {
    this.patients_registration = this.formBuilder.group({
      // recaptcha: ['', Validators.required],
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'),
        Validators.minLength(2),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'),
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+([a-zA-Z0-9]*)*'),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.min(1),
        Validators.max(90),
      ]),
      gender: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        Validators.pattern(/^[0-9]+$/),
      ]),
    });
  }

  //--------------- fORM VALIDATION MESSAGE -------------------//
  get FirstName(): FormControl {
    return this.patients_registration.get('firstname') as FormControl;
  }
  get LastName(): FormControl {
    return this.patients_registration.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.patients_registration.get('email') as FormControl;
  }
  get Phone(): FormControl {
    return this.patients_registration.get('phone') as FormControl;
  }
  get Address(): FormControl {
    return this.patients_registration.get('address') as FormControl;
  }
  get Gender(): FormControl {
    return this.patients_registration.get('gender') as FormControl;
  }
  get Age(): FormControl {
    return this.patients_registration.get('age') as FormControl;
  }
  get State(): FormControl {
    return this.patients_registration.get('state') as FormControl;
  }
  get City(): FormControl {
    return this.patients_registration.get('city') as FormControl;
  }
  get Country(): FormControl {
    return this.patients_registration.get('country') as FormControl;
  }
  get Zip(): FormControl {
    return this.patients_registration.get('zip') as FormControl;
  }

  submit() {
    this.submitted = true;

    //Check if the form is valid before submitting
    if (this.patients_registration.valid) {
      const data = this.patients_registration.value;
      this.auth.patientsRegistration(data).subscribe(
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
