import { ViewoneComponent } from './viewone/viewone.component';
import { authenGuard } from './services/authen.guard';
import { SigninComponent } from './signin/signin.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { AddformComponent } from './addform/addform.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'addform', component:AddformComponent, canActivate:[authenGuard]},
  {path: 'viewdata', component:ViewdataComponent, canActivate:[authenGuard]},
  {path: 'viewone', component:ViewoneComponent, canActivate:[authenGuard]},
  {path: 'signin', component:SigninComponent},
  {path: '**', component:SigninComponent}
];
