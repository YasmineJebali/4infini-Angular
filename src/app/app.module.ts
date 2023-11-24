import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppartementComponent } from './core/models/appartement/appartement.component';
import { ResidenceComponent } from './core/models/residence/residence.component';

@NgModule({
  declarations: [
    AppComponent,
    AppartementComponent,
    ResidenceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
