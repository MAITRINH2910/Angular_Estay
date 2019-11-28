import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListHouseComponent } from "./house/list-house/list-house.component";
import { HouseDetailComponent } from "./house/house-detail/house-detail.component";
import { PredictedHouseComponent } from "./house/predicted-house/predicted-house.component";
import { LayoutComponent } from "./house/layout/layout.component";

import { DashboardComponent } from "./account_Host/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ListUserComponent } from "./account_Admin/users/list-user/list-user.component";
import { AllBookingComponent } from "./account_Admin/booking/all-booking/all-booking.component";
import { ApprovedComponent } from "./account_Admin/booking/approved/approved.component";
import { PendingComponent } from "./account_Admin/booking/pending/pending.component";
import { ViewProfileComponent } from "./account_Admin/profile/view-profile/view-profile.component";
import { EditProfileComponent } from "./account_Admin/profile/edit-profile/edit-profile.component";
import { DashboardAdminComponent } from "./account_Admin/dashboard-admin/dashboard-admin.component";
import { LayoutAdminComponent } from "./account_Admin/layout-admin/layout-admin.component";

import { EditProfileUserComponent } from "./account_User/edit-profile-user/edit-profile-user.component";
import { ProfileComponent } from "./account_User/profile/profile.component";
import { BookingComponent } from "./account_User/booking/booking.component";
import { DashboardUserComponent } from "./account_User/dashboard-user/dashboard-user.component";
import { DeleteProfileUserComponent } from "./account_User/delete-profile-user/delete-profile-user.component";

import { AddHomestayComponent } from "./account_Host/add-homestay/add-homestay.component";
import { EditHomestayComponent } from "./account_Host/edit-homestay/edit-homestay.component";
import { AllHostHomestayComponent } from "./account_Host/all-host-homestay/all-host-homestay.component";
import { LayoutHostComponent } from "./account_Host/layout-host/layout-host.component";
import { PreviewHomestayComponent } from "./account_Host/preview-homestay/preview-homestay.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ListHouseComponent,
    LoginComponent,
    RegisterComponent,
    ListUserComponent,
    AllBookingComponent,
    ApprovedComponent,
    PendingComponent,
    ViewProfileComponent,
    EditProfileComponent,
    HouseDetailComponent,
    ProfileComponent,
    BookingComponent,
    DashboardUserComponent,
    PredictedHouseComponent,
    EditProfileUserComponent,
    DeleteProfileUserComponent,
    PageNotFoundComponent,
    LayoutComponent,
    DashboardAdminComponent,
    LayoutAdminComponent,
    AddHomestayComponent,
    EditHomestayComponent,
    AllHostHomestayComponent,
    LayoutHostComponent,
    PreviewHomestayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditProfileUserComponent, DeleteProfileUserComponent]
})
export class AppModule {}
