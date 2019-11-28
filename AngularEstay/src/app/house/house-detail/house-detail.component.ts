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
  public property: any;
  public utilities: any;
  public haveUtility= [];
  constructor(private cityService: CityService, private activatedRouteService: ActivatedRoute
    ) { }

  ngOnInit() {
    this.hotel = new Hotel();
    this.getIdHotel();   
  }

   getIdHotel() {
    this.activatedRouteService.params.subscribe(data => {
      let id = data.id;
      console.log(id);
      this.cityService.getOneHotel(id).subscribe(result => {      
      console.log(result);

      this.hotel = result;
      this.property = this.hotel.response.detail_hotels;
      this.utilities = this.hotel.response.utilities;
      for (let utility in this.utilities) {
        let value = this.utilities[utility];
        if (value==1){
          this.haveUtility.push(utility);
          console.log(this.haveUtility)
        }
    }
      
      
    })
    })
  }
}
