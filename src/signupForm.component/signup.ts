import { Component} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Home_Page} from '../home.component/home.component';

@Component({
  selector: 'signup-form',
  templateUrl: `./signup.html`,
  styleUrl: './signup.css',
  imports: [ReactiveFormsModule],
})
export class SignupForm {
  private showPassword = new Home_Page();
  public revealPassword = this.showPassword.shouldShowPassword;

  private formBuilder = new FormBuilder();
  signupForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required], Validators.minLength(8)],
    rptPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected readonly Home_Page = Home_Page;
}
