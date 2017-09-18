import {login} from "./login.component";
import { AppComponent } from './app.component';
import { Home } from './home.component'
import { profile } from "./profile.component";

export const AppRoutes: any = [
  { path: 'principal', component: AppComponent},
  { path: 'home', component: Home},
  { path: 'login', component: login},
  { path: 'profile', component: profile}



];

export const AppComponents: any = [
  AppComponent,
  Home,
  login,
  profile

];

