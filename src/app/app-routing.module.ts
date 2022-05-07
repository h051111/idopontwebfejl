import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'idopontfoglalas',
    loadChildren: () => import('./pages/idopont-foglalas/idopont-foglalas.module').then(m => m.IdopontFoglalasModule),
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    loadChildren: () => import('./register/register/register.module').then(m => m.RegisterModule),
  },
  {
    path:'idopontjaim',
    loadChildren: () => import('./pages/idopontjaim/idopontjaim.module').then(m => m.IdopontjaimModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
