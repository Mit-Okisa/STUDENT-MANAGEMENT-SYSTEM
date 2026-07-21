import { Component, inject, OnInit, signal } from '@angular/core';
import { HTTPService } from '../HTTP-Service';
import {FormsModule } from '@angular/forms';
import { Student } from '../interfaces';


@Component({
  selector: 'app-list',
  templateUrl: './studentList.html',
  styleUrl: './studentList.css',
  imports: [FormsModule]
})
export class StudentList implements OnInit {
  private _httpService = inject(HTTPService);
  allStudents = signal<Student[]>([]);

  ngOnInit() {
    this._httpService.getStudents().subscribe({
      next: (stds) => {
        this.allStudents.set(stds);
      },
      error: (err) => console.log(`Error: ${err}`),
    });
  }

  deleteStudent(id: string) {
    for (let student of this.allStudents()){
      if (student.id === id){
        this._httpService.removeStudent(id);
        this.allStudents.set(this.allStudents().filter((student) => student.id !== id));
      }}
  }

  transitionStudent(admNumber: string){
    for(let s of this.allStudents()){
      if(s.id == admNumber){
        this._httpService.transitionStudent(s).subscribe({
          next: (std) => {
            alert(`${std.name} transitioned successfully!`);
          },
        });}
    }
  }
}
