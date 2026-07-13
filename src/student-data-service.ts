import { Injectable } from '@angular/core';
import { Student } from './student.interface';
// A class that holds the data of the students in an array allowing me to add remove and retrieve

@Injectable({providedIn: 'root'})
export class StudentsDataService {
  private _studentsData: Student[] = [];

  constructor() {}

  addStudent(std: Student) {
    let existingData = localStorage.getItem('studentData');
    let studentArray:Student [] = existingData ? JSON.parse(existingData): [];
    studentArray.push(std);
    localStorage.setItem('studentData', JSON.stringify(studentArray));
  }

  getStudentData() {
    return localStorage.getItem('studentData');
  }
}
