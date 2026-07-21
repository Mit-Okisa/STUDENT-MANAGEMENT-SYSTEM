import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTPService } from '../HTTP-Service';
import { Admin } from '../interfaces';

@Component({
  selector: 'app-admin-login',
  templateUrl: '/admin.login.html',
  styleUrl: '/admin.login.css',
  imports: [FormsModule],
})
export class AdminLoginComponent {
  private _http = inject(HTTPService);
  admins: WritableSignal<Admin[]> = signal<Admin[]>([]);
  display:boolean = false;

  name = '';
  email = '';
  id = '';
  password = '';

  checkAdmin(){
    this.display = false;
    this._http.getAdmins().subscribe({
      next: res => {this.admins.set(res);},
      error: err => {alert('Error fetching data');console.log(err);}
    });
    for(let admin of this.admins()){
      if(admin.email == this.email){
        this.display = true;
        this.name = '';this.email = '';this.id = '';this.password = '';
      }
    }
  }

  addCourse(){

  }
}
