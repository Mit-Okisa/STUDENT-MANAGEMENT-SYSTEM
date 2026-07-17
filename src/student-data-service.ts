import { Injectable } from '@angular/core';
import { Student } from './student.interface';

@Injectable({ providedIn: 'root' })
export class StudentsDataService {
  private _STUDENTS_DATA_KEY = 'studentsData';

  addStudent(std: Student) {
    let studentList = this.getStudentData();
    let filteredStudents: Student[] = [];
    for(let student of studentList) {if(student.id === std.id) {
      filteredStudents = studentList.filter(
        (student) => student.id !== std.id,
      );
      filteredStudents.push(std);
      localStorage.setItem(this._STUDENTS_DATA_KEY, JSON.stringify(filteredStudents));
    }
    else{
      studentList.push(std);
      localStorage.setItem(this._STUDENTS_DATA_KEY, JSON.stringify(studentList));
    }}
  }

  getStudentData() {
    let data = localStorage.getItem(this._STUDENTS_DATA_KEY);
    let studentList: Student[] = data ? JSON.parse(data) : [];
    return studentList;
  }

  removeStudent(id: string) {
    let filteredStudents = this.getStudentData().filter((student) => student.id !== id);
    localStorage.setItem(this._STUDENTS_DATA_KEY, JSON.stringify(filteredStudents));
  }

}
