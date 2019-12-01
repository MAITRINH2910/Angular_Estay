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

import { AddHomestayComponent } from "./account_Host/add-homestay/add-homestay.component";
import { EditHomestayComponent } from "./account_Host/edit-homestay/edit-homestay.component";
import { AllHostHomestayComponent } from "./account_Host/all-host-homestay/all-host-homestay.component";
import { LayoutHostComponent } from "./account_Host/layout-host/layout-host.component";
import { PreviewHomestayComponent } from "./account_Host/preview-homestay/preview-homestay.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
    PredictedHouseComponent,    
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
    Ng4LoadingSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
