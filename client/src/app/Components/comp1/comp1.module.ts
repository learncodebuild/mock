import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp1RoutingModule } from './comp1-routing.module';
import { Comp1LayoutComponent } from './comp1-layout/comp1-layout.component';
import { Comp1MainCompComponent } from './comp1-main-comp/comp1-main-comp.component';
import { ValidateComponent } from './validate/validate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Comp1LayoutComponent,
    Comp1MainCompComponent,
    ValidateComponent
  ],
  imports: [
    CommonModule,
    Comp1RoutingModule,
    FormsModule
  ]
})
export class Comp1Module { }
