import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import * as jwt_decode from "jwt-decode";
import { AuthUserService } from "src/app/service/auth-user.service";
import { HouseService } from "src/app/service/house.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { Hotel } from "src/app/model/hotel.model";
@Component({
  selector: 'app-edit-homestay',
  templateUrl: './edit-homestay.component.html',
  styleUrls: ['./edit-homestay.component.css']
})
export class EditHomestayComponent implements OnInit {
  sub: Subscription;
  submitted = false;
  loading = false;
  formAddHouse: FormGroup;
  hotel: Hotel;
  constructor(
    private authService: AuthUserService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private houseService: HouseService,
    private routerService: Router
  ) {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  ngOnInit() {
    this.hotel = new Hotel();
    this.createForm();
  }

  createForm() {
    this.formAddHouse = this.formBuilder.group({
      title: ["", [Validators.required, this.noWhitespaceValidator]],
      description: [""],
      typeHouse: ["", [Validators.required]],
      typeRoom: ["", [Validators.required]],
      address: ["", [Validators.required, this.noWhitespaceValidator]],
      bedRoomNumber: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]*")]
      ],
      bathRoomNumber: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]*")]
      ],
      pricePerNight: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{5,11}")]
      ],
      pricePerMonth: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{5,11}")]
      ]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = false;

    this.authService.getUser().subscribe(user => {
      this.hotel.hotel_owner = user;
      this.hotel.name = this.formAddHouse.value.name;
      this.hotel.address = this.formAddHouse.value.address;
      this.hotel.city = this.formAddHouse.value.city;
      this.hotel.link = this.formAddHouse.value.link;
      this.hotel.price = this.formAddHouse.value.price;
      this.hotel.rating = this.formAddHouse.value.rating;
      this.hotel.img = this.formAddHouse.value.img;
      console.log(this.hotel);
      this.sub = this.houseService.addHouse(this.hotel).subscribe(data => {
        if (data && data.id) {
          this.routerService.navigate(["host/property"]);
        }
      });
    });

    console.log(jwt_decode(this.token.getToken()));
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}