import { Component, inject } from '@angular/core';
import { StudentsDataService } from '../student-data-service';


@Component({
  selector: 'app-list',
  template: `<section>
                <p>Student data: {{this.display()}}</p>
              </section>`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  private _studentsDataService = inject(StudentsDataService);

  display() {
    return this._studentsDataService.getStudentData();
  }
}
