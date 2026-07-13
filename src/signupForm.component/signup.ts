import { Component} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: `./signup.html`,
  styleUrl: './signup.css',
  imports: [ReactiveFormsModule],
})
export class SignupForm {

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course: new FormControl('', [Validators.required]),
    admNo: new FormControl('', [Validators.required]),
  });

  student_data = this.signUpForm.value;

  // Every time a user clicks submit, their data is written into storage.

  public writeToStorage() {
    let name = this.student_data.name
    console.log(name);
    console.log(typeof (this.student_data.name));
    localStorage.setItem('student_data', JSON.stringify(this.student_data));
    let item = localStorage.getItem('student_data');
    if (item == null) {
      localStorage.setItem('student_data', JSON.stringify(this.student_data));
    }else{
      let student = JSON.parse(item);
      console.log(student.name);
    }
  }


}
