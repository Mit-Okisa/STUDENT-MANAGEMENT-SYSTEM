import { Routes } from '@angular/router';
import { Home_Page } from '../home.component/home.component';
import { SignupForm } from '../signupForm.component/signup';

export const routes: Routes = [
  { path: '', component: Home_Page },
  { path: 'home', component: Home_Page },
  { path: 'signup', component: SignupForm }
];
