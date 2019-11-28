import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthUserService } from './auth-user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthUserService, public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('AuthToken')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
}
}