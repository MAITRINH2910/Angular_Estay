import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfileUserComponent } from '../edit-profile-user/edit-profile-user.component';
export interface DialogData {
  username: string;
  password: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string;
  password: string;
  
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileUserComponent,{
      width: '640px',disableClose: true 
    });
}
}
