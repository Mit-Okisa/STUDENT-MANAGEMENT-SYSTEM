import { Routes } from '@angular/router';
import { Home_Page } from '../home.component/home.component';
import { SignupForm } from '../signupForm.component/signup';
import { StudentList } from '../studentList.component/studentList';
import { StudentLoginForm } from '../login.component/login';
import {PageNotFound} from '../pageNotFound';
import { StudentProfileComponent } from '../student.profile.component/student-profile';
import { AdminLoginComponent } from '../admin.component/admin.login';

export const routes: Routes = [
  { path: '', component: Home_Page },
  { path: 'home', component: Home_Page },
  { path: 'register', component: SignupForm },
  { path: 'student-login', component: StudentLoginForm },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'list', loadComponent: () => StudentList },
  { path: 'home/register', redirectTo: 'register' },
  { path: 'home/student-login', redirectTo: 'student-login' },
  { path: 'home/admin-login', redirectTo: 'admin-login' },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: '**', component: PageNotFound },
];
