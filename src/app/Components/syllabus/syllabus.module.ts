import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusFormComponent } from './syllabus-form/syllabus-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SyllabusLayoutComponent } from './syllabus-layout/syllabus-layout.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    SyllabusFormComponent,
    SyllabusLayoutComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SyllabusModule { }
