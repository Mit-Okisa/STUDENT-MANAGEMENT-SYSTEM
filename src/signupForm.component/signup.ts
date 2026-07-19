import { Component, inject, signal, WritableSignal } from '@angular/core';
import {StudentDataServiceHTTP} from '../studentData ServiceHTTP';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Student } from '../interfaces';

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
  password = '';
  formValidMessage = '';

  public addStudent() {
    let student: Student = {name: this.name, email: this.email, id: this.id, courseName:this.courseName, yearOfStudy:this.yearOfStudy, password: this.password };

    this._studentsDataService.saveStudent(student).subscribe({
      next: (savedStudent) => {
        alert(`${savedStudent.name} added successfully!`);
        this.yearOfStudy = 1; this.name = ''; this.email = ''; this.courseName = ''
        this.id = '';},
      error: (err)=> alert(`Error: ${err.message}!`)
    });
  }

  validatorFunction(){
    if(this.name == ''){this.formValidMessage = 'Please enter a your name.';return false;}
    else if (this.email == ''){this.formValidMessage = 'Please enter a valid email.';return false;}//Pattern
    else if (this.id == ''){this.formValidMessage = 'Please enter a valid admission number.';return false;}//Pattern
    else if (this.courseName == ''){this.formValidMessage = 'Please enter a valid course name.';return false;}//List of available
    else if(this.yearOfStudy<=0 || this.yearOfStudy>6){this.formValidMessage = 'You can only be in year 1, 2, 3, 4, 5 or 6.Please enter a valid year.';return false;}
    else {this.formValidMessage = 'The form is okay!';return true;}
  }


}
