import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebContentRoutingModule } from './web-content-routing.module';
import { WebContentComponent } from './web-content/web-content.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WebContentComponent
  ],
  imports: [
    CommonModule,
    WebContentRoutingModule,
    SharedModule
  ]
})
export class WebContentModule { }
