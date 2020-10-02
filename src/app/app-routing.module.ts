import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import {userComponent} from './User/user.component'
import { loginComponent } from './Login/login.component'

import {AuthenticationGuard } from './Services/authentication.guard'




const routes: Routes = [
   {path: 'addUser',canActivate :[AuthenticationGuard], component:userComponent},
   {path: 'users',component:FirstComponent},
   {path: 'editUser/:val',component:userComponent},
   {path:'', pathMatch :'prefix',redirectTo :'login'},
   {path: 'login',component:loginComponent},
   {path:'** ',redirectTo :'login'},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
