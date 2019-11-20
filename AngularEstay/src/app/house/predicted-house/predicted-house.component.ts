import { Component, OnInit } from '@angular/core';
import { House } from "src/app/model/house.model";
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
  public listFeature: any;
  public topHotel: any;
  public predictedHotel: any;

  constructor(
    private cityService: CityService,private formBuilder: FormBuilder, private router: Router
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
    this.predictedHotel = this.cityService.predictedHotel;
    console.log(this.predictedHotel);
  }
  submit() {
    const selectedListFeatureIds = this.form.value.listFeature
      .map((v, i) => v ? this.listFeature[i] : null)
      .filter(v => v !== null);
    console.log(selectedListFeatureIds);
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
