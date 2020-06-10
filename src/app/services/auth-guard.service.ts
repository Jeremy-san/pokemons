import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  canActivate() {
    alert('Le guard a bien été appelé !');
    return true;
  }
}
