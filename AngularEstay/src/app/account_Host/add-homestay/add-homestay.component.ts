import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

import { AuthUserService } from "src/app/service/auth-user.service";
import { HouseService } from "src/app/service/house.service";
import { TokenStorageService } from "src/app/service/token-storage.service";
import { Hotel } from "src/app/model/hotel.model";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-add-homestay",
  templateUrl: "./add-homestay.component.html",
  styleUrls: ["./add-homestay.component.css"]
})
export class AddHomestayComponent implements OnInit {
  submitted = false;
  loading = false;
  formAddHouse: FormGroup;
  hotel: Hotel;
  public city: string;
  public name: string;
  public link: string;
  public address: string;
  public img: string;
  public rating: number;
  public price: number;

  constructor(
    private authService: AuthUserService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private houseService: HouseService,
    private routerService: Router
  ) {}
  headerConfig = {
    headers: new HttpHeaders({
      "user-access-token": window.localStorage.getItem("AuthToken")
    })
  };

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
      city: ["", [Validators.required, this.noWhitespaceValidator]],
      name: ["", [Validators.required]],
      link: [""],
      img: ["", [Validators.required]],
      address: ["", [Validators.required, this.noWhitespaceValidator]],
      rating: [
        "",
        [Validators.required, Validators.pattern("^[1-9]{1}[0-9]*")]
      ],
      price: ["", [Validators.required, Validators.pattern("^[1-9]{1}[0-9]*")]]
    });
  }

  onSubmit() {
    this.submitted = true;

    this.hotel.name = this.formAddHouse.value.name;
    this.hotel.address = this.formAddHouse.value.address;
    this.hotel.city = this.formAddHouse.value.city;
    this.hotel.link = this.formAddHouse.value.link;
    this.hotel.price = this.formAddHouse.value.price;
    this.hotel.rating = this.formAddHouse.value.rating;
    this.hotel.img = this.formAddHouse.value.img;
    console.log(this.hotel.city);
    this.houseService
      .addHouse(
        this.hotel.city,
        this.hotel.name,
        this.hotel.link,
        this.hotel.img,
        this.hotel.address,
        this.hotel.rating,
        this.hotel.price,
        this.headerConfig
      )
      .subscribe(data => {
        console.log(data);
        
      });
  }
}
