import { Component } from "@angular/core";
import { RouterLink} from '@angular/router';
import { SignupForm} from '../signupForm.component/signup';

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  imports: [RouterLink]
})

export class Home_Page {
  //If user clicks admin, they are sent to an admin login, if student, student login
  private shouldShowConfirm = false;

  public callSignup(){
    this.shouldShowConfirm = true;
  }

  get shouldShowPassword(): boolean {
      return this.shouldShowConfirm;
  }
}
