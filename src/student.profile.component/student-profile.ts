import {Component, inject } from '@angular/core';
import {Student} from '../interfaces';
import {VerifyStudentService} from '../login.component/verifyStudentService';

@Component({
  selector: 'student-profile',
  template: `
    @if (this.verifyStudentService.isPasswordCorrect) {
      <p>Hello {{ this.thisStudent.name }}</p>
      <p>Here are your details;</p>
      <ul>
        <li>Admission Number: {{ this.thisStudent.id }}</li>
        <li>Email Address: {{ this.thisStudent.email }}</li>
        <li>Course name: {{ this.thisStudent.courseName }}</li>
        <li>Current Year of Study: {{ this.thisStudent.yearOfStudy }}</li>
      </ul>
    }
  `,
})
export class StudentProfileComponent {
  verifyStudentService = inject(VerifyStudentService);
  thisStudent: Student = this.verifyStudentService.student;
}
