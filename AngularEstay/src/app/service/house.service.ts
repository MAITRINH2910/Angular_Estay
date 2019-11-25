import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { url, httpOptions } from 'src/app/shared/common/common';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) { }

  public addHouse(house: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${url}/house`, JSON.stringify(house), httpOptions);
  }

  public getOneHouse(id: number) {
    return this.http.get<Hotel>(`${url}/house/${id}`, httpOptions);
  }

  public editHouse(house: Hotel) {
    return this.http.put(`${url}/house/${house.id}/edit`, httpOptions);
  }

  public getAllHouses() {
    return this.http.get<Hotel[]>(`${url}/house`, httpOptions);
  }

  public getAllHousesByUserId(id: number) {
    return this.http.get<Hotel[]>(`${url}/house/user/${id}`, httpOptions);
  }
}
