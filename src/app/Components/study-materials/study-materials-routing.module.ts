import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyMaterialsLayoutComponent } from './study-materials-layout/study-materials-layout.component';
import { StudyMaterialsFormComponent } from './study-materials-form/study-materials-form.component';

const routes: Routes = [
  {path:"", redirectTo:"materials", pathMatch:"full"},
  {path:"", component: StudyMaterialsLayoutComponent, children:[
     {path:"materials", component:StudyMaterialsFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyMaterialsRoutingModule { }
