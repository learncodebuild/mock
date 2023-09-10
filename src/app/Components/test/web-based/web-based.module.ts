import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebBasedRoutingModule } from './web-based-routing.module';
import { WebBasedFormComponent } from './web-based-form/web-based-form.component';
import { WebBasedLayoutComponent } from './web-based-layout/web-based-layout.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    WebBasedFormComponent,
    WebBasedLayoutComponent
  ],
  imports: [
    CommonModule,
    WebBasedRoutingModule,
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
export class WebBasedModule { }
