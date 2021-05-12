import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PushNotificationComponent
  ],
  imports: [
    CommonModule,
    PushNotificationRoutingModule,
    SharedModule
  ]
})
export class PushNotificationModule { }
