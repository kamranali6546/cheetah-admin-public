import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './rider/rider.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RiderComponent
  ],
  imports: [
    CommonModule,
    RiderRoutingModule,
    SharedModule
  ]
})
export class RiderModule { }
