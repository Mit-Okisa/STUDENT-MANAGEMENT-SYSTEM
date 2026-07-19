import { Component, inject, OnInit, signal } from '@angular/core';
import { StudentDataServiceHTTP } from '../studentData ServiceHTTP';
import {FormsModule } from '@angular/forms';
import { Student } from '../interfaces';


@Component({
  selector: 'app-list',
  templateUrl: './studentList.html',
  styleUrl: './studentList.css',
  imports: [FormsModule]
})
export class StudentList implements OnInit {
  private _studentsDataService = inject(StudentDataServiceHTTP);
  studentYear = signal(0);
  allStudents = signal<Student[]>([]);
  studentInYears = signal<Student[]>([]);

  ngOnInit() {
    this._studentsDataService.getStudents().subscribe({
      next: (stds) => {
        this.allStudents.set(stds);
        this.studentInYears.set(stds);
      },
      error: (err) => console.log(`Error: ${err}`),
    });
  }

  deleteStudent(id: string) {
    this._studentsDataService.removeStudent(id).subscribe({
      next: ()=>{
        this.allStudents.set(this.allStudents().filter(student => student.id !== id));
        alert('Student removed successfully!')
      },
      error: err => console.log(`Error: ${err}`)
    });
  }

  transitionStudent(admNumber: string){
    for(let s of this.allStudents()){
      if(s.id == admNumber){
        this._studentsDataService.transitionStudent(s).subscribe({
          next: (std) => {
            alert(`${std.name} transitioned successfully!`);
          }
        });}
    }
  }

  changeYears(year: number){
    this.studentYear.set(year);
    if (this.studentYear()==0){
      this.studentInYears.set(this.allStudents());}else{
    let years = this.studentInYears().filter(std => std.yearOfStudy == this.studentYear());
    this.studentInYears.set(years);
  }}
}
