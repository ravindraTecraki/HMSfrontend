import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-p-signup',
  templateUrl: './p-signup.component.html',
  styleUrl: './p-signup.component.css',
})
export class PSignupComponent {
 patients_self_register!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patients_self_register = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'),
          Validators.minLength(2),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]+([a-zA-Z]*)*'),
          Validators.minLength(2),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/),
        ],
      ],
      cnfpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/),
        ],
      ],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: [
        '',
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      address: ['', [Validators.required]],

      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      aadhar: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{12}'),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.min(1),
        Validators.max(90),
      ]),
      gender: new FormControl('', [Validators.required]),
    });
  }

  get Firstname(): FormControl {
    return this.patients_self_register.get('firstname') as FormControl;
  }
  get Lastname(): FormControl {
    return this.patients_self_register.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.patients_self_register.get('email') as FormControl;
  }
  get Gender(): FormControl {
    return this.patients_self_register.get('gender') as FormControl;
  }
  get Password(): FormControl {
    return this.patients_self_register.get('password') as FormControl;
  }
  get Cnfpassword(): FormControl {
    return this.patients_self_register.get('cnfpassword') as FormControl;
  }
  get Address(): FormControl {
    return this.patients_self_register.get('address') as FormControl;
  }
  get City(): FormControl {
    return this.patients_self_register.get('city') as FormControl;
  }
  get State(): FormControl {
    return this.patients_self_register.get('state') as FormControl;
  }
  get Zip(): FormControl {
    return this.patients_self_register.get('zip') as FormControl;
  }
  get Phone(): FormControl {
    return this.patients_self_register.get('phone') as FormControl;
  }
  get Aadhar(): FormControl {
    return this.patients_self_register.get('aadhar') as FormControl;
  }
  get Age(): FormControl {
    return this.patients_self_register.get('age') as FormControl;
  }
  P_register() {
    this.submitted = true;

    // Check if the form is valid before submitting
    if (this.patients_self_register.valid) {
      console.log(this.patients_self_register.value);
      // Implement your form submission logic here
    }
  }
}
