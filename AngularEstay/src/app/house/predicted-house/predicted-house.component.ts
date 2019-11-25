import { Component, OnInit } from '@angular/core';
import { CityService } from "src/app/service/city.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predicted-house',
  templateUrl: './predicted-house.component.html',
  styleUrls: ['./predicted-house.component.css']
})
export class PredictedHouseComponent implements OnInit {
  public form: FormGroup
  public city: string;
  public listFeature: any;
  public topHotel: any;
  public predictedHotel: any;
  public ratingValue: number;
  public priceValue: number;
  public selectedListFeatureIds:  any = [];

  constructor(
    private cityService: CityService,private formBuilder: FormBuilder, private router: Router
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
    this.city = this.cityService.city;
    this.listFeature = this.cityService.listFeature;
    console.log(this.listFeature);
    this.topHotel = this.cityService.topHotel;
    console.log(this.topHotel);
    this.predictedHotel = this.cityService.predictedHotel;
    console.log(this.predictedHotel);
  }
  async submit() {
    this.selectedListFeatureIds = this.form.value.listFeature
      .map((v, i) => v ? this.listFeature[i] : null)
      .filter(v => v !== null);
    console.log(this.selectedListFeatureIds);
    this.predictedHotel = await this.cityService
    .getPredictedHotelByFeature(this.city, this.ratingValue, this.priceValue, this.selectedListFeatureIds)
    .toPromise();
  this.predictedHotel = this.predictedHotel.response;
  console.log(this.predictedHotel);
  this.router.navigate(["/predicted-hotel"]);

  }
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };
  return validator;
}
