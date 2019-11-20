import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthUserService } from 'src/app/service/auth-user.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private authService: AuthUserService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  logout() {
    this.authService.logout();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  status: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', email: 'dan@gmail.com', status: 'paid'},
  {position: 2, name: 'Helium', email: 'mann@gmail.com', status: 'paid'},
  {position: 3, name: 'Lithium', email: 'mann@gmail.com', status: 'paid'},
  {position: 4, name: 'Beryllium', email: 'mann@gmail.com', status: 'paid'},
  {position: 5, name: 'Boron',email: 'mann@gmail.com', status: 'paid'},
  {position: 6, name: 'Carbon', email: 'mann@gmail.com', status: 'paid'},
  {position: 7, name: 'Nitrogen', email: 'mann@gmail.com', status: 'paid'},
  {position: 8, name: 'Oxygen', email: 'mann@gmail.com', status: 'paid'},
  {position: 9, name: 'Fluorine', email: 'mann@gmail.com', status: 'paid'},
  {position: 10, name: 'Neon', email: 'mann@gmail.com', status: 'paid'},
  {position: 11, name: 'Sodium', email: 'mann@gmail.com', status: 'paid'},
  {position: 12, name: 'Magnesium', email: 'mann@gmail.com', status: 'paid'},
  {position: 13, name: 'Aluminum', email: 'mann@gmail.com', status: 'paid'},
  {position: 14, name: 'Silicon', email: 'mann@gmail.com', status: 'paid'},
  {position: 15, name: 'Phosphorus',email: 'mann@gmail.com', status: 'paid'},
 
];
