import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate:  [AuthGuard],
  },

  {
    path: 'web-content',
    loadChildren: () =>
      import('./web-content/web-content.module').then((o) => o.WebContentModule),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((o) => o.OrdersModule),
  },

  {
    path: 'rider',
    loadChildren: () =>
      import('./rider/rider.module').then((o) => o.RiderModule),
  },

  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((o) => o.CustomersModule),
  },

  {
    path: 'restaurant',
    loadChildren: () =>
      import('./restaurant/restaurant.module').then((o) => o.RestaurantModule),
  },

  {
    path: 'kitchen',
    loadChildren: () =>
      import('./kitchen/kitchen.module').then((o) => o.KitchenModule),
  },

  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((o) => o.ServicesModule),
  },

  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then((o) => o.InventoryModule),
  },

  {
    path: 'vendors',
    loadChildren: () =>
      import('./vendors/vendors.module').then((o) => o.VendorsModule),
  },

  {
    path: 'push-notification',
    loadChildren: () =>
      import('./push-notification/push-notification.module').then((o) => o.PushNotificationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
