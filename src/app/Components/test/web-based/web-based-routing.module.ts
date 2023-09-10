import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebBasedLayoutComponent } from './web-based-layout/web-based-layout.component';
import { WebBasedFormComponent } from './web-based-form/web-based-form.component';

const routes: Routes = [
  {path:"", redirectTo:"form", pathMatch:"full"},
  {path:"", component:WebBasedLayoutComponent, children:[
    {path:"form", component:WebBasedFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebBasedRoutingModule { }
