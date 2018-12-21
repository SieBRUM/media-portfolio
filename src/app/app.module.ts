import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuBarComponent } from './app-menu-bar-component/app-menu-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { AppHomePageComponent } from './app-home-page-component/app-home-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppMePageComponent } from './app-me-page-component/app-me-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavService } from './side-nav.service';
import { MatComponnetsModule } from './mat-components.module';
import { AppDigitalFootprintComponent } from './app-digital-footprint-page.component/app-digital-footprint-page.component';
import { AppADayInALifePageComponent } from './app-a-day-in-a-life-page-component/app-a-day-in-a-life-page.component';
import { AppNoLogoPageComponent } from './app-no-logo-page-component/app-no-logo-page.component';
import { AppBigDataPageComponent } from './app-big-data-page-component/app-big-data-page.component';
import { AppWeAreTheRobotsPageComponent } from './app-we-are-the-robots-page-component/app-we-are-the-robots-page.component';
import { AppUserExperiencePageComponent } from './app-user-experience-page-component/app-user-experience-page.component';
import { AppPortfolioPageComponent } from './app-portfolio-page-component/app-portfolio-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AppMenuBarComponent,
    AppHomePageComponent,
    AppMePageComponent,
    AppDigitalFootprintComponent,
    AppADayInALifePageComponent,
    AppNoLogoPageComponent,
    AppBigDataPageComponent,
    AppWeAreTheRobotsPageComponent,
    AppUserExperiencePageComponent,
    AppPortfolioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponnetsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
