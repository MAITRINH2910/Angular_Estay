import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { url, httpOptions } from "src/app/shared/common/common";
import { Hotel } from "../model/hotel.model";

@Injectable({
  providedIn: "root"
})
export class HouseService {
  constructor(public http: HttpClient) {}
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };
  public addHotel(
    city: string,
    name: string,
    link: string,
    img: string,
    address: string,
    rating: number,
    price: number
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
    return this.http.post<Hotel>(`${url}/add_hotel`, obj, this.headerConfig);
  }

  public getOneHouse(id: number) {
    return this.http.get<Hotel>(`${url}/house/${id}`, httpOptions);
  }

  public editHouse(house: Hotel) {
    return this.http.put(`${url}/house/${house.id}/edit`, httpOptions);
  }

  public deleteHotel(id:string) {
    return this.http.post(`${url}/delelete_hotel/${id}`, this.headerConfig);
  }

  public getAllHousesByUserId(id: number) {
    return this.http.get<Hotel[]>(`${url}/house/user/${id}`, httpOptions);
  }
}
