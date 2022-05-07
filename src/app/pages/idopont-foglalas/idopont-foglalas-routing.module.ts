import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdopontFoglalasComponent } from './idopont-foglalas.component';

const routes: Routes = [{path: '', component: IdopontFoglalasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdopontFoglalasRoutingModule { }
