import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Admin, Student } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HTTPService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  saveStudent(student: Student) {
    this.http.post<Student>(`${this.apiUrl}/students`, student).subscribe({
      next: (savedStudent) => {
        alert(`${savedStudent.name} added successfully!`);
      },
      error: (err) => alert(`Error: ${err.message}!`),
    });
  }

  getStudents() {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  removeStudent(admNumber: string){
       this.http.delete<void>(`${this.apiUrl}/students/${admNumber}`).subscribe({
        next: () => {
          alert('Student removed successfully!');
        },
        error: (err) => alert(`Error: ${err}`),
      });
    }

  transitionStudent(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.apiUrl}/students/${student.id}`, {yearOfStudy: (Number(student.yearOfStudy) + 1)})
  }

  getAdmins(){
    return this.http.get<Admin[]>(`${this.apiUrl}/admins`);
  }
}
