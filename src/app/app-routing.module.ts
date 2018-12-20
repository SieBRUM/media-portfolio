import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomePageComponent } from './app-home-page-component/app-home-page.component';
import { AppMePageComponent } from './app-me-page-component/app-me-page.component';

const routes: Routes = [
  { path: 'me', component: AppMePageComponent },
  { path: 'home', component: AppHomePageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
