import { Component, inject, signal, WritableSignal } from '@angular/core';
import {HTTPService} from '../HTTP-Service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Student } from '../interfaces';

@Component({
  selector: 'signup-form',
  templateUrl: `./signup.html`,
  styleUrl: './signup.css',
  imports: [ReactiveFormsModule, FormsModule],
  providers: [HTTPService],
})
export class SignupForm {
  private _httpService = inject(HTTPService);
  // student: Student = new Student();
  name = '';
  email = '';
  id = '';
  courseName = '';
  yearOfStudy =1;
  password = '';
  formValidMessage = '';

  public addStudent() {
    let student: Student = {name: this.name, email: this.email, id: this.id, courseName:this.courseName, yearOfStudy:this.yearOfStudy, password: this.password };
    this._httpService.saveStudent(student)
    this.yearOfStudy = 1;
    this.name = '';
    this.email = '';
    this.courseName = '';
    this.id = '';
    this.password = '';
  }


}
