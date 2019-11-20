import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from "./../../model/hotel.model";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  public hotel: any;

  constructor(private cityService: CityService, private activatedRouteService: ActivatedRoute
    ) { }

  ngOnInit() {
    this.hotel = new Hotel();
    this.getIdHotel();   
  }

  getIdHotel() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data.id;
     this.cityService.getOneHotel(id).subscribe(result => {
        this.hotel = result;
        this.hotel = this.hotel.response;
        console.log(this.hotel)
      })
    })
  }
}
