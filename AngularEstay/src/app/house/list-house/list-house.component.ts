import { Component, OnInit } from "@angular/core";
import { CityService } from "src/app/service/city.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: "app-list-house",
  templateUrl: "./list-house.component.html",
  styleUrls: ["./list-house.component.css"]
})
export class ListHouseComponent implements OnInit {
  public form: FormGroup;
  public city: string;
  public listFeature: any;
  public topHotel: any;
  public predictedHotel: any;
  public ratingValue: number;
  public priceValue: number;
  public params = new HttpParams();
  public selectedListFeatureIds:  any = [];
  ;

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.listFeature = this.cityService.listFeature;

    // const controls = this.listFeature.map(c => new FormControl(false));
    // controls[0].setValue(true);

    // this.form = this.formBuilder.group({
    //   listFeature: new FormArray(controls, minSelectedCheckboxes(1))
    // });
    this.form = this.formBuilder.group({
      listFeature: new FormArray([], minSelectedCheckboxes(1))
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.listFeature.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.listFeature as FormArray).push(control);
    });
  }

  rating(event) {
    this.ratingValue = event.value;
  }
  price(event) {
    this.priceValue = event.value;
  }
  ngOnInit() {
    this.listFeature = this.cityService.listFeature;
    console.log(this.listFeature);
    this.topHotel = this.cityService.topHotel;
    console.log(this.topHotel);
    this.city = this.cityService.city;
    console.log(this.city);
    this.rating(event);
    this.ratingValue = this.cityService.ratingValue;
    this.price(event);
    this.priceValue = this.cityService.priceValue;
  }
  async submit() {
  
    this.selectedListFeatureIds = this.form.value.listFeature
      .map((v, i) => (v ? this.listFeature[i] : null))
      .filter(v => v !== null);    

    console.log(this.selectedListFeatureIds); 

    // this.predictedHotel = this.cityService.getPredictedHotelByFeature(this.city, this.ratingValue, this.priceValue, this.selectedListFeatureIds).subscribe(data => {
    //     this.predictedHotel = data;
    //     this.predictedHotel = this.predictedHotel.response;
    //     this.router.navigate(["/predicted-hotel"]);

    //     console.log(this.predictedHotel);
    //   });
    this.predictedHotel = await this.cityService
    .getPredictedHotelByFeature(this.city, this.ratingValue, this.priceValue, this.selectedListFeatureIds)
    .toPromise();
  this.predictedHotel = this.predictedHotel.response;
  console.log(this.predictedHotel);
  this.router.navigate(["/predicted-hotel"]);
  }
  ngOnDestroy() {
    this.cityService.listFeature = this.listFeature;
    this.cityService.topHotel = this.topHotel;
    this.cityService.city = this.city;
    this.cityService.predictedHotel = this.predictedHotel;
  }
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };
  return validator;
}
