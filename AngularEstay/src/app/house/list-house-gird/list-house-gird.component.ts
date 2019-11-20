import { Component, OnInit } from '@angular/core';
import { CityService } from "src/app/service/city.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-house-gird',
  templateUrl: './list-house-gird.component.html',
  styleUrls: ['./list-house-gird.component.css']
})
export class ListHouseGirdComponent implements OnInit {
  public form: FormGroup;
  public city: string;
  public listFeature: any;
  public topHotel: any;
  public predictedHotel: any;
  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.listFeature = this.cityService.listFeature;

    const controls = this.listFeature.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.form = this.formBuilder.group({
      listFeature: new FormArray(controls, minSelectedCheckboxes(1))
    });
  }

  ngOnInit() {
    this.listFeature = this.cityService.listFeature;
    console.log(this.listFeature);
    this.topHotel = this.cityService.topHotel;
    console.log(this.topHotel);
    this.city = this.cityService.city;
    console.log(this.city);
  }
  submit() {
    const selectedListFeatureIds = this.form.value.listFeature
      .map((v, i) => (v ? this.listFeature[i] : null))
      .filter(v => v !== null);
    console.log(selectedListFeatureIds);
    this.predictedHotel = this.cityService.getPredictedHotelByFeature(this.city, selectedListFeatureIds).subscribe(data=>{
      this.predictedHotel = data;
      this.predictedHotel = this.predictedHotel.response;
      console.log(this.predictedHotel);

    })
    // this.router.navigate(["/predicted-hotel"]);
  }
  ngOnDestroy() {
    this.cityService.predictedHotel = this.predictedHotel;
  }
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    return totalSelected >= min ? null : { required: true };
  };
  return validator;
}

