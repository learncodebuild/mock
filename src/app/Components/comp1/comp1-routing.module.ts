import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1LayoutComponent } from './comp1-layout/comp1-layout.component';
import { Comp1MainCompComponent } from './comp1-main-comp/comp1-main-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Comp1LayoutComponent,
    children: [
      { path: 'hello', component: Comp1MainCompComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Comp1RoutingModule {}
