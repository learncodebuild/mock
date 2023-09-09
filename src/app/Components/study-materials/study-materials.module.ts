import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudyMaterialsRoutingModule } from './study-materials-routing.module';
import { StudyMaterialsLayoutComponent } from './study-materials-layout/study-materials-layout.component';
import { StudyMaterialsFormComponent } from './study-materials-form/study-materials-form.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    StudyMaterialsLayoutComponent,
    StudyMaterialsFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudyMaterialsRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudyMaterialsModule { }
