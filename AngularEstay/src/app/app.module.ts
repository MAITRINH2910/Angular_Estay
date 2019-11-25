import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatGridListModule,
  MatRadioModule,
  MatNativeDateModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatToolbarModule
} from "@angular/material";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HostComponent } from "./account_Host/host/host.component";
import { DashboardComponent } from "./account_Host/dashboard/dashboard.component";
import { ListHouseComponent } from "./house/list-house/list-house.component";
import { ListHouseGirdComponent } from "./house/list-house-gird/list-house-gird.component";
import { AddHouseComponent } from "./account_Host/add-house/add-house.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ListUserComponent } from "./account_Admin/users/list-user/list-user.component";
import { HotelListingComponent } from "./account_Admin/listing/hotel-listing/hotel-listing.component";
import { AllBookingComponent } from "./account_Admin/booking/all-booking/all-booking.component";
import { ApprovedComponent } from "./account_Admin/booking/approved/approved.component";
import { PendingComponent } from "./account_Admin/booking/pending/pending.component";
import { ViewProfileComponent } from "./account_Admin/profile/view-profile/view-profile.component";
import { EditProfileComponent } from "./account_Admin/profile/edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./account_Admin/profile/change-password/change-password.component";
import { HouseDetailComponent } from "./house/house-detail/house-detail.component";
import { ProfileComponent } from "./account_User/profile/profile.component";
import { BookingComponent } from "./account_User/booking/booking.component";
import { DashboardUserComponent } from "./account_User/dashboard-user/dashboard-user.component";
import { PaymentComponent } from './house/payment/payment.component';
import { PaymentStep2Component } from './house/payment-step2/payment-step2.component';
import { PaymentStep3Component } from './house/payment-step3/payment-step3.component';
import { PaymentStep1Component } from './house/payment-step1/payment-step1.component';
import { PredictedHouseComponent } from './house/predicted-house/predicted-house.component';
import { EditProfileUserComponent } from './account_User/edit-profile-user/edit-profile-user.component';
import { DeleteProfileUserComponent } from './account_User/delete-profile-user/delete-profile-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreviewHotelComponent } from './account_Host/preview-hotel/preview-hotel.component';
import { LayoutComponent } from './house/layout/layout.component';
import { DashboardAdminComponent } from './account_Admin/dashboard-admin/dashboard-admin.component';
import { LayoutAdminComponent } from './account_Admin/layout-admin/layout-admin.component';
import { AddHotelComponent } from './account_Owner/add-hotel/add-hotel.component';
import { EditHotelComponent } from './account_Owner/edit-hotel/edit-hotel.component';
import { AllHotelOwnerComponent } from './account_Owner/all-hotel-owner/all-hotel-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HostComponent,
    DashboardComponent,
    ListHouseComponent,
    ListHouseGirdComponent,
    AddHouseComponent,
    LoginComponent,
    RegisterComponent,
    ListUserComponent,
    HotelListingComponent,
    AllBookingComponent,
    ApprovedComponent,
    PendingComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    HouseDetailComponent,
    ProfileComponent,
    BookingComponent,
    DashboardUserComponent,
    PaymentComponent,
    PaymentStep2Component,
    PaymentStep3Component,
    PaymentStep1Component,
    PredictedHouseComponent,
    EditProfileUserComponent,
    DeleteProfileUserComponent,
    PageNotFoundComponent,
    PreviewHotelComponent,
    LayoutComponent,
    DashboardAdminComponent,
    LayoutAdminComponent,
    AddHotelComponent,
    EditHotelComponent,
    AllHotelOwnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatGridListModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditProfileUserComponent, DeleteProfileUserComponent],
})
export class AppModule {}
