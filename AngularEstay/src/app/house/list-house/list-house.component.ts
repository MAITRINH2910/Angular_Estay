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
  public selectedListFeatureIds: any = [];
  public loading = false;

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.listFeature = this.cityService.listFeature;

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
    this.topHotel = this.cityService.topHotel;
    this.city = this.cityService.city;
    this.rating(event);
    this.ratingValue = this.cityService.ratingValue;
    this.price(event);
    this.priceValue = this.cityService.priceValue;
  }

  async submit() {
    this.loading = true;
    this.selectedListFeatureIds = this.form.value.listFeature
      .map((v, i) => (v ? this.listFeature[i] : null))
      .filter(v => v !== null);

    this.predictedHotel = await this.cityService
      .getPredictedHotelByFeature(
        this.city,
        this.ratingValue,
        this.priceValue,
        this.selectedListFeatureIds
      )
      .toPromise();

    console.log(this.predictedHotel);
    this.cityService.predictedHotel = this.predictedHotel;
    this.loading = false;
    this.router.navigate(["/predicted-hotel"]);
  }
  ngOnDestroy() {
    this.cityService.listFeature = this.listFeature;
    this.cityService.topHotel = this.topHotel;
    this.cityService.city = this.city;
    // this.cityService.predictedHotel = this.predictedHotel;
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
