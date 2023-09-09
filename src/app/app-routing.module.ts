import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"", loadChildren: () => import('./Components/comp1/comp1.module').then((m)=> m.Comp1Module)},
  {path:"", redirectTo:"classify", pathMatch: "full"},
  {path:"classify", loadChildren: () => import('./Components/classification/classification.module').then((m)=> m.ClassificationModule)},
  {path:"study", loadChildren: () => import('./Components/study-materials/study-materials.module').then((m)=> m.StudyMaterialsModule)},
  {path:"syllabus", loadChildren: () => import('./Components/syllabus/syllabus.module').then((m)=> m.SyllabusModule)},
  {path:"test", loadChildren: () => import('./Components/test/form-based/form-based.module').then((m)=> m.FormBasedModule)}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
