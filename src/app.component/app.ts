import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App_Header } from '../header.component/header.component';
import { App_Footer } from '../footer.component/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, App_Header, App_Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('student-management-system');
}
