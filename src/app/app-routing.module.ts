import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSignupComponent } from './components/pages/page-signup/page-signup.component';
import { PageLandingComponent } from './components/pages/page-landing/page-landing.component';
import { PageSigninComponent } from './components/pages/page-signin/page-signin.component';

const routes: Routes = [
  { path: '', component: PageLandingComponent },
  { path: 'signup', component: PageSignupComponent },
  { path: 'signin', component: PageSigninComponent },
  { path: '**', component: PageLandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
