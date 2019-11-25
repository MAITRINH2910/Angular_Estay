import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AuthUserService } from "src/app/service/auth-user.service";
import { HttpHeaders } from "@angular/common/http";
import { AdminService } from "src/app/service/admin.service";
import { MatSort } from '@angular/material';


@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  displayedColumns: string[] = ["id", "address", "city", "hotel_owner","name","price","rating","status"];
  hotelDataSource: any;
  private allHotel: any;
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
    this.adminService.getActiveHotel(this.headerConfig)  
      .subscribe(  
      res => {  
        this.hotelDataSource = new MatTableDataSource();  
        this.hotelDataSource = res;  
        this.hotelDataSource = this.hotelDataSource.response
        this.hotelDataSource.paginator = this.paginator;  
        this.hotelDataSource.sort = this.sort;  

        console.log(this.hotelDataSource);  
      },  
      error => {  
        console.log('There was an error while retrieving Photos !!!' + error);  
      });  
  } 
  logout() {
    this.authService.logout();
  }
}

