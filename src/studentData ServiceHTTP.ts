import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentDataServiceHTTP {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/students';

  saveStudent(student: Student): Observable<Student> {
    //Check for duplicates.
    return this.http.post<Student>(this.apiUrl, student);
  }

  getStudents() {
    return this.http.get<Student[]>(this.apiUrl);
  }

  removeStudent(admNumber: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${admNumber}`);
  }

  transitionStudent(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.apiUrl}/${student.id}`, {yearOfStudy: (Number(student.yearOfStudy) + 1)})
  }
}
