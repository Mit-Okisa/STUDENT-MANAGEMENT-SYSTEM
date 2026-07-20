import { Component} from "@angular/core";
import { RouterLink} from '@angular/router';
import {ButtonDirective} from './buttonDirective';

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  imports: [RouterLink, ButtonDirective],
})

export class Home_Page {}
