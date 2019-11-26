import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthUserService } from './auth-user.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: "root"
})
export class RoleGuardService implements CanActivate {
  constructor(private _authService: AuthUserService, private _router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   // this will be passed from the route config
    // on the data property
    const expectedRole = next.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (
      !this._authService.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
          // navigate to login page
      this._router.navigate(['/login']);
      return false;
    }
    return true;    
  }
}
