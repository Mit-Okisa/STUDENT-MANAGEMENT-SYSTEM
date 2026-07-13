import { Component, inject} from '@angular/core';
import {StudentsDataService} from '../student-data-service';

import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { Student } from '../student.interface';

@Component({
  selector: 'signup-form',
  templateUrl: `./signup.html`,
  styleUrl: './signup.css',
  imports: [ReactiveFormsModule, FormsModule],
  providers: [StudentsDataService],
})
export class SignupForm {
  private _studentsDataService = inject(StudentsDataService);
  student: Student = new Student();

  addToArray() {
    alert('Form submitted successfully!');
    this._studentsDataService.addStudent(this.student);
  }
}
