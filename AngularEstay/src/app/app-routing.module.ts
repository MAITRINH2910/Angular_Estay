import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HostComponent } from "./account_Host/host/host.component";
import { DashboardComponent } from "./account_Host/dashboard/dashboard.component";
import { PropertyComponent } from "./account_Host/property/property.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { ListHouseComponent } from "./house/list-house/list-house.component";
import { ListHouseGirdComponent } from "./house/list-house-gird/list-house-gird.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AdminComponent } from "./account_Admin/admin/admin.component";
import { ListUserComponent } from "./account_Admin/users/list-user/list-user.component";
import { AllBookingComponent } from "./account_Admin/booking/all-booking/all-booking.component";
import { PendingComponent } from "./account_Admin/booking/pending/pending.component";
import { ApprovedComponent } from "./account_Admin/booking/approved/approved.component";
import { HotelListingComponent } from "./account_Admin/listing/hotel-listing/hotel-listing.component";
import { ChangePasswordComponent } from "./account_Admin/profile/change-password/change-password.component";
import { EditProfileComponent } from "./account_Admin/profile/edit-profile/edit-profile.component";
import { ViewProfileComponent } from "./account_Admin/profile/view-profile/view-profile.component";
import { DashboardUserComponent } from "./account_User/dashboard-user/dashboard-user.component";
import { ProfileComponent } from "./account_User/profile/profile.component";
import { BookingComponent } from "./account_User/booking/booking.component";
import { HouseDetailComponent } from "./house/house-detail/house-detail.component";
import { PaymentComponent } from "./house/payment/payment.component";
import { PaymentStep1Component } from "./house/payment-step1/payment-step1.component";
import { PaymentStep2Component } from "./house/payment-step2/payment-step2.component";
import { PaymentStep3Component } from "./house/payment-step3/payment-step3.component";
import { PredictedHouseComponent } from "./house/predicted-house/predicted-house.component";
import { PageAdminComponent } from './account_Admin/page-admin/page-admin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "admin",
    component: PageAdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "estay",
        component: AdminComponent
      },
      {   
        path: "users/list-user",
        component: ListUserComponent
      },   
      {
        path: "listing/pending-hotel",
        component: PendingComponent
      },
      {
        path: "listing/all-hotel",
        component: AllBookingComponent
      },
      {
        path: "listing/approved-hotel",
        component: ApprovedComponent
      },
      {
        path: "profile/view-profile",
        component: ViewProfileComponent
      },
      {
        path: "profile/edit-profile",
        component: EditProfileComponent
      },
      {
        path: "profile/change-password",
        component: ChangePasswordComponent
      }
    ]
  },
  // {
  //   path: "admin",
  //   component: AdminComponent
  // },
  // {
  //   path: "admin/users/list-user",
  //   component: ListUserComponent
  // },
  // {
  //   path: "admin/listing/list-hotel",
  //   component: HotelListingComponent
  // },
  // {
  //   path: "admin/booking/all-booking",
  //   component: AllBookingComponent
  // },
  // {
  //   path: "admin/booking/pending-booking",
  //   component: PendingComponent
  // },
  // {
  //   path: "admin/booking/approved-booking",
  //   component: ApprovedComponent
  // },
  // {
  //   path: "admin/profile/view-profile",
  //   component: ViewProfileComponent
  // },
  // {
  //   path: "admin/profile/edit-profile",
  //   component: EditProfileComponent
  // },
  // {
  //   path: "admin/profile/change-password",
  //   component: ChangePasswordComponent
  // },
  // {
  //   path: "admin/dashboard-admin",
  //   component: DashboardAdminComponent
  // },
  {
    path: "users/register",
    component: RegisterComponent
  },
  {
    path: "users/login",
    component: LoginComponent
  },  
  {
    path: "city",
    component: ListHouseComponent
  },

  {
    path: "predicted-hotel",
    component: PredictedHouseComponent
  },
  {
    path: "detail-hotel/:id",
    component: HouseDetailComponent
  },
  {
    path: "me/dashboard",
    component: DashboardUserComponent
  },
  {
    path: "me/profile",
    component: ProfileComponent
  },
  {
    path: "me/booking",
    component: BookingComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  },
  {
    path: "payment-step1",
    component: PaymentStep1Component
  },
  {
    path: "payment-step2",
    component: PaymentStep2Component
  },
  {
    path: "payment-step3",
    component: PaymentStep3Component
  },
  
  {
    path: "host",
    component: HostComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "property",
        component: PropertyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
