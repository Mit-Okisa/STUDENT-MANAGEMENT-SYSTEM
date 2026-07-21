import { Component} from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';
import {ButtonDirective} from './buttonDirective';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterLink, ButtonDirective, RouterOutlet],
})
export class Home_Page {}
