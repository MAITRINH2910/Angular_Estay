import { Component, OnInit } from "@angular/core";
import { AuthLoginInfo } from "../../model/login-info";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { AuthUserService } from "src/app/service/auth-user.service";
import { Subscription } from "rxjs";
// import { headerConfig } from 'src/app/shared/common/common';
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
 
  public form: any = {};
  public isLoggedIn = false;
  public isLoginFailed = false;
  errorMessage = "";
  role: string;
  sub: Subscription;
  private loginInfo: AuthLoginInfo;
  public responseData: any;
  private token: any;

  constructor(
    private authService: AuthUserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getAuthority();
    }
  }

  async onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(this.form.username, this.form.password);

    this.responseData = await this.authService
      .attemptAuth(this.loginInfo)
      .toPromise();
    this.responseData = this.responseData.response;
    console.log(this.responseData);
    // data => {
    this.tokenStorage.saveToken(this.responseData.token);
    this.tokenStorage.saveUsername(this.responseData.username);
    this.tokenStorage.saveAuthority(this.responseData.role);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.role = this.tokenStorage.getAuthority();
    this.router.navigate(["admin/estay"]);
    this.token = this.responseData.token;
    // },
    // error => {
    //   console.log(error);
    //   this.errorMessage = error.error.message;
    //   this.isLoginFailed = true;
    // }

    
  }

  reloadPage() {
    window.location.reload();
  }
}
