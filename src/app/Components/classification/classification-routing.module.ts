import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationLayoutComponent } from './classification-layout/classification-layout.component';
import { ClassificationFormComponent } from './classification-form/classification-form.component';

const routes: Routes = [
  {path:"", component:ClassificationLayoutComponent, children:[
    {path:"", component:ClassificationFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificationRoutingModule { }
