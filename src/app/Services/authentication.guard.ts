import { CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthenticationGuard implements CanActivate {
 constructor(){

 }

 canActivate() :boolean {
     if(localStorage.getItem('user')!="" && localStorage.getItem('user')!=null){
         return true;
     }
     else {
         return false;
     }
 }

}
