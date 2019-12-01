import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url } from "src/app/shared/common/common";
import { Hotel } from "../model/hotel.model";

@Injectable({
  providedIn: "root"
})
export class HouseService {
  constructor(public http: HttpClient) {}
  
  public addHouse(
    city: string,
    name: string,
    link: string,
    img: string,
    address: string,
    rating: number,
    price: number, headerConfig
  ) {
    var obj = {
      city: city,
      name: name,
      link: link,
      img: img,
      address: address,
      rating: rating,
      price: price
    };
    return this.http.post<Hotel>(`${url}/hotels/add_hotel`, obj, headerConfig);
  }
 
  public getOneHotel(id: number, headerConfig) {
    return this.http.get(`${url}/hotels/get_one_hotel/${id}`, headerConfig);
  }

  public updateHotel(house: Hotel, headerConfig) {
    return this.http.put(`${url}/hotels/update_hotel/${house.id}`, headerConfig);
  }

  public deleteHotel(id:string, headerConfig) {
    return this.http.delete(`${url}/hotels/delelete_hotel/${id}`, headerConfig);
  }

  public getAllHotelsByOwner(headerConfig) {
    return this.http.get(`${url}/hotels/get_all_hotels_of_owner`, headerConfig);
  }
}
