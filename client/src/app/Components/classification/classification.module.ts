import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationRoutingModule } from './classification-routing.module';
import { ClassificationLayoutComponent } from './classification-layout/classification-layout.component';
import { ClassificationFormComponent } from './classification-form/classification-form.component';


@NgModule({
  declarations: [
    ClassificationLayoutComponent,
    ClassificationFormComponent
  ],
  imports: [
    CommonModule,
    ClassificationRoutingModule
  ]
})
export class ClassificationModule { }
