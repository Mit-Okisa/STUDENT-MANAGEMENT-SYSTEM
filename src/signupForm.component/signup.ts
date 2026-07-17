import { Component, inject, signal, WritableSignal } from '@angular/core';
import {StudentDataServiceHTTP} from '../studentData ServiceHTTP';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Student } from '../student.interface';

@Component({
  selector: 'signup-form',
  templateUrl: `./signup.html`,
  styleUrl: './signup.css',
  imports: [ReactiveFormsModule, FormsModule],
  providers: [StudentDataServiceHTTP],
})
export class SignupForm {
  private _studentsDataService = inject(StudentDataServiceHTTP);
  // student: Student = new Student();
  name = '';
  email = '';
  id = '';
  courseName = '';
  yearOfStudy =1;

  public addStudent() {
    let student: Student = {name: this.name, email: this.email, id: this.id, courseName:this.courseName, yearOfStudy:this.yearOfStudy };

    this._studentsDataService.saveStudent(student).subscribe({
      next: (savedStudent) => {
        alert(`${savedStudent.name} added successfully!`);
        this.yearOfStudy = 1; this.name = ''; this.email = ''; this.courseName = ''
        this.id = '';},
      error: (err)=> alert(`Error: ${err.message}!`)
    });
  }
}
