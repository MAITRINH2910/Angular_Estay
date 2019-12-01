import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HouseService } from 'src/app/service/house.service';
import { AuthUserService } from 'src/app/service/auth-user.service';
import { Hotel } from 'src/app/model/hotel.model';
@Component({
  selector: 'app-preview-homestay',
  templateUrl: './preview-homestay.component.html',
  styleUrls: ['./preview-homestay.component.css']
})
export class PreviewHomestayComponent implements OnInit {

  
  sub: Subscription;
  listHotel: Hotel[];
  constructor(private houseService: HouseService, private authService: AuthUserService) { }

  ngOnInit() {
    //  this.houseService.getAllHotelsByOwner(userId).subscribe(data=> {
    //     this.listHotel = data;
    //   })
  
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
