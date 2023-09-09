import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBasedRoutingModule } from './form-based-routing.module';
import { FormBasedLayoutComponent } from './form-based-layout/form-based-layout.component';
import { FormBasedFormComponent } from './form-based-form/form-based-form.component';
import { ClockComponent } from './clock/clock.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormBasedLayoutComponent,
    FormBasedFormComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    FormBasedRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class FormBasedModule { }
