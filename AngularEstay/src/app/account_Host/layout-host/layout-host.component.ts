import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/service/auth-user.service';

@Component({
  selector: 'app-layout-host',
  templateUrl: './layout-host.component.html',
  styleUrls: ['./layout-host.component.css']
})
export class LayoutHostComponent implements OnInit {

  constructor(private authService: AuthUserService,  ) {}

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }
}
