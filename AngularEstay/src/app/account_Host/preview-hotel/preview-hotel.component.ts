import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HouseService } from 'src/app/service/house.service';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { Hotel } from 'src/app/model/hotel.model';

@Component({
  selector: 'app-preview-hotel',
  templateUrl: './preview-hotel.component.html',
  styleUrls: ['./preview-hotel.component.css']
})
export class PreviewHotelComponent implements OnInit {

  sub: Subscription;
  listHotel: Hotel[];
  constructor(private houseService: HouseService, private authService: AuthUserService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(data=>{
      let userId = data.id;
      this.sub = this.houseService.getAllHousesByUserId(userId).subscribe((data: Hotel[])=> {
        this.listHotel = data;
      })
    }) 
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}