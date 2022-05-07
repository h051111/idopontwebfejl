import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdopontFoglalasRoutingModule } from './idopont-foglalas-routing.module';
import { IdopontFoglalasComponent } from './idopont-foglalas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IdopontFoglalasComponent],
  imports: [
    CommonModule,
    IdopontFoglalasRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    RouterModule
  ]
})
export class IdopontFoglalasModule { }
