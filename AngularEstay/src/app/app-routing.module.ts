import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoleGuardService } from './service/role-guard.service';
import { AuthGuardService } from "./service/auth-guard.service";

import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

import { LayoutAdminComponent } from './account_Admin/layout-admin/layout-admin.component';
import { DashboardAdminComponent } from './account_Admin/dashboard-admin/dashboard-admin.component';
import { ListUserComponent } from "./account_Admin/users/list-user/list-user.component";
import { AllBookingComponent } from "./account_Admin/booking/all-booking/all-booking.component";
import { ApprovedComponent } from "./account_Admin/booking/approved/approved.component";
import { PendingComponent } from "./account_Admin/booking/pending/pending.component";
import { ViewProfileComponent } from "./account_Admin/profile/view-profile/view-profile.component";
import { EditProfileComponent } from "./account_Admin/profile/edit-profile/edit-profile.component";

// import { DashboardUserComponent } from "./account_User/dashboard-user/dashboard-user.component";
// import { ProfileComponent } from "./account_User/profile/profile.component";
// import { BookingComponent } from "./account_User/booking/booking.component";

import { LayoutComponent } from './house/layout/layout.component';
import { ListHouseComponent } from "./house/list-house/list-house.component";
import { HouseDetailComponent } from "./house/house-detail/house-detail.component";
import { PredictedHouseComponent } from "./house/predicted-house/predicted-house.component";
// import { PaymentComponent } from "./house/payment/payment.component";
// import { PaymentStep1Component } from "./house/payment-step1/payment-step1.component";
// import { PaymentStep2Component } from "./house/payment-step2/payment-step2.component";
// import { PaymentStep3Component } from "./house/payment-step3/payment-step3.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { HostComponent } from "./account_Host/host/host.component";
import { DashboardComponent } from "./account_Host/dashboard/dashboard.component";
import { AddHouseComponent } from './account_Host/add-house/add-house.component';
import { PreviewHotelComponent } from './account_Host/preview-hotel/preview-hotel.component';
import { EditHotelComponent } from './account_Owner/edit-hotel/edit-hotel.component';
import { AllHotelOwnerComponent } from './account_Owner/all-hotel-owner/all-hotel-owner.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      }, {
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
      // {
      //   path: "payment",
      //   component: PaymentComponent
      // },
      // {
      //   path: "payment-step1",
      //   component: PaymentStep1Component
      // },
      // {
      //   path: "payment-step2",
      //   component: PaymentStep2Component
      // },
      // {
      //   path: "payment-step3",
      //   component: PaymentStep3Component
      // },
    ]
  },
  
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  }, 
  // {
  //   path: '404', component: PageNotFoundComponent
  // },
  // {
  //   path: '**', redirectTo: '/404'
  // },
  {
    path: "admin",
    component: LayoutAdminComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'ADMIN'
    },
    children: [
      {
        path: "estay",
        component: DashboardAdminComponent
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
    ]
  },
  
  {
    path: "host",
    component: HostComponent,
    canActivate: [RoleGuardService], 
    data: { 
      expectedRole: 'HOTEL-OWNER'
    },
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "hotel/preview-hotel",
        component: PreviewHotelComponent
      },
      {
        path: "hotel/all-hotel-owner",
        component: AllHotelOwnerComponent
      },
      {
        path: "hotel/add-hotel",
        component: AddHouseComponent
      },
      {
        path: "hotel/edit-hotel",
        component: EditHotelComponent
      }
    ]
  },

  // {
  //   path: "me/dashboard",
  //   component: DashboardUserComponent
  // },
  // {
  //   path: "me/profile",
  //   component: ProfileComponent
  // },
  // {
  //   path: "me/booking",
  //   component: BookingComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
