import { Component, ViewChild } from "@angular/core";
import { AuthUserService } from "src/app/service/auth-user.service";
import { HttpHeaders } from "@angular/common/http";
import { AdminService } from "src/app/service/admin.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Hotel } from "src/app/model/hotel.model";


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  displayedColumns: string[] = [
    "id",
    "address",
    "city",
    "hotel_owner",
    "name",
    "price",
    "rating",
    "status"
  ];
  dataSource: MatTableDataSource<Hotel>;
  allHotel: Hotel[];
  temp: any;
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

  constructor(
    private authService: AuthUserService,
    private adminService: AdminService
  ) {}
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator, { static: false }) set matPaginator(
    mp: MatPaginator
  ) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  async setDataSourceAttributes() {
    this.temp = await this.adminService
      .getPendingHotel(this.headerConfig)
      .toPromise();
    this.allHotel = this.temp.response;
    this.dataSource = new MatTableDataSource(this.allHotel);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      this.applyFilter("");
    }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 
  logout() {
    this.authService.logout();
  }
}
