import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AuthUserService } from "src/app/service/auth-user.service";
import { HttpHeaders } from "@angular/common/http";
import { AdminService } from "src/app/service/admin.service";
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ["id", "address", "city", "hotel_owner","name","price","rating","status"];
  userDataSource: any;
  private allUser: any;
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  constructor(
    private authService: AuthUserService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.RenderDataTable();     
  }
  RenderDataTable() {  
    this.adminService.getAllUser(this.headerConfig)  
      .subscribe(  
      res => {  
        this.userDataSource = new MatTableDataSource();  
        this.userDataSource = res;  
        this.userDataSource = this.userDataSource.response
        this.userDataSource.paginator = this.paginator;  
        this.userDataSource.sort = this.sort;  

        console.log(this.userDataSource);  
      },  
      error => {  
        console.log('There was an error while retrieving Photos !!!' + error);  
      });  
  } 
  logout() {
    this.authService.logout();
  }
}


