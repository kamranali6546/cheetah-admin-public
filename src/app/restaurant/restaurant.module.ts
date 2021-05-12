import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule
  ]
})
export class RestaurantModule { }
