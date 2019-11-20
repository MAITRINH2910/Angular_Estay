import { Injectable } from "@angular/core";

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAuthorities";

@Injectable({
  providedIn: "root"
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() {}

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.removeItem(AUTHORITIES_KEY);
  }
  
  signOut1() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(email: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, email);
  }
  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveAuthority(authority: string) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    localStorage.setItem(AUTHORITIES_KEY, authority);
  }
  public getAuthority(): string {
    return localStorage.getItem(AUTHORITIES_KEY);
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getTokenSession(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsernameSession(email: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, email);
  }
  public getUsernameSession(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthoritiesSession(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
  public getAuthoritiesSession(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
}
