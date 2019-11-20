import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url} from "src/app/shared/common/common";

@Injectable({
  providedIn: "root"
})
export class CityService {
  public listCityApi: string = url + "/hotels/get_list_city";
  public listFeatureApi: string = url + "/hotels/get_features";
  public topHotelApi: string = url + "/hotels/get_top_hotels";
  public predictedHotelApi: string = url + "/hotels/get_predicted_hotels";
  public detailHotelApi: string = url + "get_one_hotel";
  public city: string;
  public listFeature: any;
  public topHotel: any;
  public predictedHotel: any;

  constructor(public http: HttpClient) {}

  public getAllCities() {
    return this.http.get(this.listCityApi);
  }
  public getFeatureByCity(city: string) {
    var obj = { city: city };
    return this.http.post(this.listFeatureApi,obj);
  }
  public getTopHotelByCity(city: string) {
    var obj = { city: city };
    return this.http.post(this.topHotelApi,obj);
  } 
  // public getPredictedHotelByFeature(city: string, list_feature: any, rating: number, price: number) {
  //   var obj = { city: city, list_feature: list_feature, rating, price };
  //   return this.http.post(this.predictedHotelApi,obj);
  // }
  public getPredictedHotelByFeature(city: string, list_feature: any) {
    var obj = { city: city, list_feature: list_feature};
    return this.http.post(this.predictedHotelApi,obj);
  } 

  public getOneHotel(id: number){
    return this.http.get(`${this.detailHotelApi}/${id}`)
  }
}
