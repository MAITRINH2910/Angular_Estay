import { Component, OnInit } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { CityService } from "../service/city.service";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
//
export class HomeComponent implements OnInit {
  private city: string;
  private cities: any;
  private listFeature: any;
  private topHotel: any;
  public option: string;
  public myControl = new FormControl();
  public filteredOptions: Observable<string[]>;

  constructor(
    private cityService: CityService,
    private routerService: Router
  ) {}

  async ngOnInit() {
    this.cities = await this.cityService.getAllCities().toPromise();
    this.cities = this.cities.response;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  // Filter input
  public _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // Get City Name from input
  onOptionSelected(dataOption: any) {
    this.city = dataOption.option.value;
  }

  // Click button Search
  async onSubmit() {
    this.listFeature = await this.cityService.getFeatureByCity(this.city).toPromise();
    this.listFeature = this.listFeature.response;
    
    this.topHotel= await this.cityService.getTopHotelByCity(this.city).toPromise();
    this.topHotel = this.topHotel.response;

    this.routerService.navigate(['/city']);

  }  
  ngOnDestroy() {
    this.cityService.listFeature = this.listFeature; 
    this.cityService.topHotel = this.topHotel; 
    this.cityService.city = this.city;
  }
}
