import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBasedLayoutComponent } from './form-based-layout/form-based-layout.component';
import { FormBasedFormComponent } from './form-based-form/form-based-form.component';

const routes: Routes = [
  {path:"", redirectTo:"form", pathMatch:"full"},
  {path:"", component:FormBasedLayoutComponent, children:[
    {path:"form", component:FormBasedFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBasedRoutingModule { }
