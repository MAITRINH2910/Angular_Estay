import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: "app-delete-profile-user",
  templateUrl: "./delete-profile-user.component.html",
  styleUrls: ["./delete-profile-user.component.css"]
})
export class DeleteProfileUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteProfileUserComponent>
  ) {} // Closing dialog window

  public cancel(): void {
    // To cancel the dialog window
    this.dialogRef.close();
  }

  public cancelN(): void {
    this.dialog.closeAll();
  }

  ngOnInit() {}
}
