import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusFormComponent } from './syllabus-form/syllabus-form.component';
import { SyllabusLayoutComponent } from './syllabus-layout/syllabus-layout.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    SyllabusFormComponent,
    SyllabusLayoutComponent
  ],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRadioModule
  ]
})
export class SyllabusModule { }
