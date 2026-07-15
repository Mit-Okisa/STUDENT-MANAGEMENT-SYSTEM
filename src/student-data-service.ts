import { Injectable } from '@angular/core';
import { Student } from './student.interface';

@Injectable({ providedIn: 'root' })
export class StudentsDataService {
  addStudent(std: Student) {
    let existingData = localStorage.getItem('studentData');
    let studentArray: Student[] = existingData ? JSON.parse(existingData) : [];
    studentArray.push(std);
    localStorage.setItem('studentData', JSON.stringify(studentArray));
  }

  getStudentData() {
    let data = localStorage.getItem('studentData');
    let studentList: Student[] = data ? JSON.parse(data) : [];
    return studentList;
  }

  removeStudent(id: string) {
    let filteredStudents = this.getStudentData().filter((student) => student.admissionNumber !== id);
    localStorage.setItem('studentData', JSON.stringify(filteredStudents));
  }
}
