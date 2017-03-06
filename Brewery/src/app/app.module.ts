import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';
import { WeatherDataService } from './weather-data.service';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { FilterbeerPipe } from './filterbeer.pipe';
import { BeerWeatherComponent } from './beer-weather/beer-weather.component';
import { BeerContactService } from './beer-contact.service';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    FilterbeerPipe,
    BeerWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, WeatherDataService, BeerContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
