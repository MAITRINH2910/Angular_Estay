import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/service/auth-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private authService: AuthUserService) {}

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
