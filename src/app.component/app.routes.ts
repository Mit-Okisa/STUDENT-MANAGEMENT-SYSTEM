import { Routes } from '@angular/router';
import { Home_Page } from '../home.component/home.component';
import { SignupForm } from '../signupForm.component/signup';
import { StudentList } from '../studentList.component/studentList';
import { StudentLoginForm } from '../login.component/login';
import {PageNotFound} from '../pageNotFound';
import { StudentProfileComponent } from '../student.profile.component/student-profile';

export const routes: Routes = [
  { path: '', component: Home_Page },
  {
    path: 'home',
    component: Home_Page,
    children: [
      {path:'register', component: SignupForm},
      { path: 'student-login', component: StudentLoginForm },
      // { path: 'admin-login', component: LoginForm },
    ],
  },
  { path: 'list', loadComponent: () => StudentList },
  { path: 'home/register', redirectTo: '/register' },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: '**', component: PageNotFound },
];
