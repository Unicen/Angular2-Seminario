import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { ServiceCartService } from './service-cart.service';
import { BeerAboutComponent } from './beer-about/beer-about.component';

import { appRoutes } from './app.routes';
import { BeerCartComponent } from './beer-cart/beer-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerAboutComponent,
    BeerCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BeerDataService, ServiceCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
