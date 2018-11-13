import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadChildren: './sign-in/sign-in.module#SignInPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpPageModule'
  },
  {
    path: 'tabs',
    canActivate: [AuthGuardService],
    loadChildren: './tabs/tabs.router.module#TabsPageRoutingModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
