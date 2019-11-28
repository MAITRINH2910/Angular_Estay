import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { AuthUserService } from "src/app/service/auth-user.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignUpInfo } from "src/app/model/signup-info";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public loading = false;
  public submitted = false;
  public errorMessage = "";
  private response: any;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignUpFailed = false;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthUserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.signupInfo = new SignUpInfo(
      this.f.username.value,
      this.f.password.value,
      "HOTEL_OWNER"
    );
    console.log(this.signupInfo);

    this.authService.signUp(this.signupInfo).subscribe(data => {
      this.response = data;
      this.response = this.response.response;
      console.log(data);
      // this.isSignUpFailed = false;

      // this.errorMessage = this.response.error;
      // console.log(this.errorMessage);
      // this.isSignUpFailed = true;
      // this.loading = false;
    });
  }
}
