import { inject, Injectable } from '@angular/core';
import { StudentsDataService } from './student-data-service';

@Injectable({ providedIn: 'root' })
export class TransitionStudentService {
  private _studentsDataService = inject(StudentsDataService);

  transitionStudent(num: string) {

    for (let s of this._studentsDataService.getStudentData()) {
      if (s.id == num) {
        s.yearOfStudy = Number(s.yearOfStudy) + 1;
        this._studentsDataService.addStudent(s);
      }
    }
  }}
