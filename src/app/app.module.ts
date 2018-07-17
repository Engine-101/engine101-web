import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PageSignupComponent } from './components/pages/page-signup/page-signup.component';
import { PageSigninComponent } from './components/pages/page-signin/page-signin.component';
import { PageLandingComponent } from './components/pages/page-landing/page-landing.component';
import { ElementNavigationTopComponent } from './components/elements/element-navigation-top/element-navigation-top.component';


@NgModule({
  declarations: [
    AppComponent,
    PageSignupComponent,
    PageSigninComponent,
    PageLandingComponent,
    ElementNavigationTopComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
