import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/service/auth-user.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {

  constructor(private authService: AuthUserService,  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
