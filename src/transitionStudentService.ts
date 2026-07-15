import { Injectable } from '@angular/core';
import { StudentsDataService } from './student-data-service';

@Injectable({ providedIn: 'root' })
export class TransitionStudentService {
  private _studentsDataService = new StudentsDataService();

  transitionStudent(num: string) {
    for (let s of this._studentsDataService.getStudentData()) {
      if (s.admissionNumber == num) {
        s.yearOfStudy = Number(s.yearOfStudy) + 1;
        console.log(s.yearOfStudy);
      }
    }
  }
}
