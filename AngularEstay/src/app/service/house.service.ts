import { Injectable } from '@angular/core';
import { House } from '../model/house.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { url, httpOptions } from 'src/app/shared/common/common';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) { }

  public addHouse(house: House): Observable<House> {
    return this.http.post<House>(`${url}/house`, JSON.stringify(house), httpOptions);
  }

  public getOneHouse(id: number) {
    return this.http.get<House>(`${url}/house/${id}`, httpOptions);
  }

  public editHouse(house: House) {
    return this.http.put(`${url}/house/${house.id}/edit`, httpOptions);
  }

  public getAllHouses() {
    return this.http.get<House[]>(`${url}/house`, httpOptions);
  }

  public getAllHousesByUserId(id: number) {
    return this.http.get<House[]>(`${url}/house/user/${id}`, httpOptions);
  }
}
