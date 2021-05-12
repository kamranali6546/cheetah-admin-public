import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebContentComponent } from './web-content/web-content.component';

const routes: Routes = [
  { path: '' , component: WebContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebContentRoutingModule { }
