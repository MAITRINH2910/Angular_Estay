import { Component, OnInit, ViewChild } from "@angular/core";
import { HouseService } from "src/app/service/house.service";
import { HttpHeaders } from "@angular/common/http";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Hotel } from "src/app/model/hotel.model";
import { AuthUserService } from "src/app/service/auth-user.service";
import { AdminService } from "src/app/service/admin.service";

@Component({
  selector: "app-all-host-homestay",
  templateUrl: "./all-host-homestay.component.html",
  styleUrls: ["./all-host-homestay.component.css"]
})
export class AllHostHomestayComponent implements OnInit {
  public hotel: any;
  constructor(
    private houseService: HouseService,
    private authService: AuthUserService,
    private adminService: AdminService
  ) {}
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };
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
  temp: any;
  allHotel: Hotel[];
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
  ngOnInit() {
    // this.houseService.getAllHotelsByOwner(this.headerConfig).subscribe(data => {
    //   this.hotel = data;
    //   this.hotel = this.hotel.response;
    // });
  }

  async setDataSourceAttributes() {
    this.temp = await this.houseService
      .getAllHotelsByOwner(this.headerConfig)
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
