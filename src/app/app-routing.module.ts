import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomePageComponent } from './app-home-page-component/app-home-page.component';
import { AppMePageComponent } from './app-me-page-component/app-me-page.component';
import { AppDigitalFootprintComponent } from './app-digital-footprint-page.component/app-digital-footprint-page.component';
import { AppADayInALifePageComponent } from './app-a-day-in-a-life-page-component/app-a-day-in-a-life-page.component';
import { AppNoLogoPageComponent } from './app-no-logo-page-component/app-no-logo-page.component';
import { AppBigDataPageComponent } from './app-big-data-page-component/app-big-data-page.component';
import { AppWeAreTheRobotsPageComponent } from './app-we-are-the-robots-page-component/app-we-are-the-robots-page.component';
import { AppUserExperiencePageComponent } from './app-user-experience-page-component/app-user-experience-page.component';
import { AppPortfolioPageComponent } from './app-portfolio-page-component/app-portfolio-page.component';

const routes: Routes = [
  { path: 'me', component: AppMePageComponent },
  { path: 'projects/digitalfootprint', component: AppDigitalFootprintComponent },
  { path: 'projects/bigdata', component: AppBigDataPageComponent },
  { path: 'projects/nologo', component: AppNoLogoPageComponent },
  { path: 'projects/userexperience', component: AppUserExperiencePageComponent },
  { path: 'projects/portfolio', component: AppPortfolioPageComponent },
  { path: 'projects/wearetherobots', component: AppWeAreTheRobotsPageComponent },
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
