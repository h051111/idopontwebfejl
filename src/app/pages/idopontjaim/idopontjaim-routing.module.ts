import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdopontjaimComponent } from './idopontjaim.component';

const routes: Routes = [{path: '', component: IdopontjaimComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdopontjaimRoutingModule { }
