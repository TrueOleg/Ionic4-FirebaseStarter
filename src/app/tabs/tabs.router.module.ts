import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../pages/home/home.page';
import { AboutPage } from '../pages/about/about.page';
import { AccountPage } from '../pages/account/account.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'account',
        outlet: 'account',
        component: AccountPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [TabsPage, HomePage, AboutPage, AccountPage],
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
