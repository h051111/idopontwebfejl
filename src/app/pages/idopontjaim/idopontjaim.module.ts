import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdopontjaimRoutingModule } from './idopontjaim-routing.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdopontjaimComponent } from './idopontjaim.component';
import { MatTableModule } from '@angular/material/table'; 
import { FormattimePipe } from 'src/app/pipes/formattime.pipe';

@NgModule({
  declarations: [IdopontjaimComponent, FormattimePipe],
  imports: [
    CommonModule,
    IdopontjaimRoutingModule,
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
    RouterModule,
    MatTableModule
  ]
})
export class IdopontjaimModule { }
