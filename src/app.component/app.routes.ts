import { Routes } from '@angular/router';
import { Home_Page } from '../home.component/home.component';
import { SignupForm } from '../signupForm.component/signup';
import { StudentList } from '../studentList.component/studentList';
import { LoginForm } from '../login.component/login';

export const routes: Routes = [
  { path: '', component: Home_Page },
  { path: 'home', component: Home_Page },
  { path: 'register', component: SignupForm },
  { path: 'list', component: StudentList },
  { path: 'home/register', component: SignupForm },
  {path: 'login', component: LoginForm},
  { path: 'home/login', component: LoginForm },
];
