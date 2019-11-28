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
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(`${url}/users/register`, info, httpOptions);
  }

  attemptAuth(credentials: AuthLoginInfo) {
    return this.http.post(`${url}/users/login`, credentials, httpOptions);
  }

  updateInfoUser(newPass: string,headerConfig) {
    var obj = { password: newPass };
    return this.http.put(`${url}/users/update_current_user`, obj, headerConfig);
  }
  
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
 
  isAuthenticated(): boolean {
    return localStorage.getItem("AuthToken") != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  clear(): void {
    localStorage.clear();
  }

  logout(): void {
    this.clear();
    this._router.navigate(["login"]);
  }

  decode() {
    return decode(localStorage.getItem("AuthToken"));
  }
}
