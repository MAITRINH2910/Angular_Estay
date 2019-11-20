import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { url, httpOptions } from "src/app/shared/common/common";

import { JwtResponse } from "../model/jwt-response";
import { AuthLoginInfo } from "../model/login-info";
import { SignUpInfo } from "../model/signup-info";
import { User } from "../model/user.model";
import * as jwt_decode from "jwt-decode";
import { TokenStorageService } from "./token-storage.service";
import decode from "jwt-decode";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthUserService {
  constructor(
    private http: HttpClient,
    private token: TokenStorageService,
    private _router: Router
  ) {}

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(`${url}/users/register`, info, httpOptions);
  }

  attemptAuth(credentials: AuthLoginInfo) {
    return this.http.post(`${url}/users/login`, credentials, httpOptions);
  }

  updatePassword(id: number, newPass: string, oldPass: string) {
    return this.http.put(`${url}/users/edit-account/change-password/${id}`, {
      newPass: newPass,
      oldPass: oldPass
    });
  }
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };
  getInfoUser(headerConfig) {
    return this.http.get(
      `${url}/users/get_information_current_user`,
      headerConfig
    );
  }
  
  getUser(): Observable<User> {
    const decoded = jwt_decode(this.token.getToken());
    const id = decoded.sub;
    return this.http.get<User>(`${url}/users/${id}`, httpOptions);
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem("AuthToken") != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }
  clear(): void {
    localStorage.clear();
  }
  logout(): void {
    this.clear();
    this._router.navigate(["users/login"]);
  }

  decode() {
    return decode(localStorage.getItem("AuthToken"));
  }
}
