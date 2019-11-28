import { Component, OnInit } from "@angular/core";
import { AuthLoginInfo } from "../../model/login-info";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { AuthUserService } from "src/app/service/auth-user.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public form: any = {};
  public isLoggedIn = false;
  public isLoginFailed = false;
  public loading = false;
  public submitted = false;
  public errorMessage = "";
  public role: string;
  sub: Subscription;
  private loginInfo: AuthLoginInfo;
  private token: any;
  response: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthUserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getAuthority();
    }
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.f.username.value,
      this.f.password.value
    );
    console.log(this.loginInfo);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.form.username == null || this.form.password == null) {
      this.errorMessage;
      this.loading = false;
    }
    this.authService.attemptAuth(this.loginInfo).subscribe(data => {
      this.response = data;
      this.response = this.response.response;
      if (this.response.role != null) {
        this.tokenStorage.saveToken(this.response.token);
        this.tokenStorage.saveUsername(this.response.username);
        this.tokenStorage.saveAuthority(this.response.role);
        if (this.response.role == "ADMIN") {
          this.router.navigate(["admin/estay"]);
        } else if (this.response.role == "HOTEL_OWNER"){
          this.router.navigate(["host"]);
        }
      }
      this.isLoginFailed = true;
      this.errorMessage = this.response.error;
      console.log(this.errorMessage);
      this.loading = false;
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
