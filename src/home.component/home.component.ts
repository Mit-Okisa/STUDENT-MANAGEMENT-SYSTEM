import { Component } from "@angular/core";
import { RouterLink} from '@angular/router';

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})

export class Home_Page {
  private shouldShowConfirm = false;

  public callSignup(){
    this.shouldShowConfirm = true;
  }

  get shouldShowPassword(): boolean {
      return this.shouldShowConfirm;
  }
}
