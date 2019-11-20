import { Component, OnInit } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { AuthUserService } from "src/app/service/auth-user.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})

export class AdminComponent implements OnInit {

  private infoAdmin: any;
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

  constructor(private authService: AuthUserService) {}

  ngOnInit() {
    this.infoAdmin = this.authService.getInfoUser(this.headerConfig).subscribe(data => {
        this.infoAdmin = data;
        this.infoAdmin = this.infoAdmin.response;
        console.log(this.infoAdmin);
      });
  }

  logout() {
    this.authService.logout();
  }
}
