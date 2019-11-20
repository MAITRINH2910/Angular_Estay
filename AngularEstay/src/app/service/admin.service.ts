import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { url } from "src/app/shared/common/common";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  public listHotelApi: string = url + "/hotels/get_all_hotels";
  public listActiveHotelApi: string = url + "/hotels/get_all_hotels_active";
  public listPendingHotelApi: string = url + "/hotels/get_all_hotels_pending";
  public listUserApi: string = url + "/users/get_all_user";

  constructor(public http: HttpClient) {}
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

  public getAllHotel(headerConfig) {
    return this.http.get(this.listHotelApi, headerConfig);
  }
  public getAllUser(headerConfig) {
    return this.http.get(this.listUserApi, headerConfig);
  }
  public getActiveHotel(headerConfig) {
    return this.http.get(this.listActiveHotelApi, headerConfig);
  }
  public getPendingHotel(headerConfig) {
    return this.http.get(this.listPendingHotelApi, headerConfig);
  }
}
