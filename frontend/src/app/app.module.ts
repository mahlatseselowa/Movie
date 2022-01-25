import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { CastteamComponent } from './components/castteam/castteam.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    CastteamComponent,
    NavbarComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
