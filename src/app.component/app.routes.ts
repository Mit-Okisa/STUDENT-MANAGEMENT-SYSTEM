import { Routes } from '@angular/router';
import { Home_Page } from '../home.component/home.component';
import { SignupForm } from '../signupForm.component/signup';
import { ListComponent } from '../list.component/list.component';

export const routes: Routes = [
  { path: '', component: Home_Page },
  { path: 'home', component: Home_Page },
  { path: 'signup', component: SignupForm },
  {path: 'list', component: ListComponent},
  {path: 'home/signup', component: SignupForm},
];
