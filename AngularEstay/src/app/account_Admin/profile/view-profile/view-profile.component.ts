import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  private infoAdmin: any;
  public username;
  public role;
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
        this.role = this.infoAdmin.role;
        this.username = this.infoAdmin.username;
      });
  }

  logout() {
    this.authService.logout();
  }

}
