import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomePageComponent } from './app-home-page-component/app-home-page.component';
import { AppMePageComponent } from './app-me-page-component/app-me-page.component';
import { AppDigitalFootprintComponent } from './app-digital-footprint-page.component.ts/app-digital-footprint-page.component';
import { AppADayInALifePageComponent } from './app-a-day-in-a-life-page-component/app-a-day-in-a-life-page.component';

const routes: Routes = [
  { path: 'me', component: AppMePageComponent },
  { path: 'projects/digitalfootprint', component: AppDigitalFootprintComponent },
  { path: 'projects/adayinthelife', component: AppADayInALifePageComponent },
  { path: 'home', component: AppHomePageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
