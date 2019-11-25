import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/service/auth-user.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(private authService: AuthUserService,  ) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
