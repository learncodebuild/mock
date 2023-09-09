import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusLayoutComponent } from './syllabus-layout/syllabus-layout.component';
import { SyllabusFormComponent } from './syllabus-form/syllabus-form.component';

const routes: Routes = [
  {path:"", redirectTo:"view", pathMatch:"full"},
  {path:"", component:SyllabusLayoutComponent, children:[
    {path:"view", component:SyllabusFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
