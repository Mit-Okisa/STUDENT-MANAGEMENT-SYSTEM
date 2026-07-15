import { Component, inject, signal } from '@angular/core';
import { StudentsDataService } from '../student-data-service';
import {FormsModule } from '@angular/forms';
import {TransitionStudentService} from '../transitionStudentService';


@Component({
  selector: 'app-list',
  templateUrl: './studentList.html',
  styleUrl: './studentList.css',
  imports: [FormsModule]
})
export class StudentList {
  private _studentsDataService = inject(StudentsDataService);
  private _transitionStudentService = inject(TransitionStudentService);
  studentYear = signal(0);


  obtainStudentsData() {
    let stds = this._studentsDataService.getStudentData();
    if (this.studentYear() == 0){
      return stds;
    }else{
      return stds.filter((s) => s.yearOfStudy == this.studentYear());
    }
    }

    get studentServiceData(){return this._studentsDataService;}

    get transitionService(){return this._transitionStudentService;}
}
