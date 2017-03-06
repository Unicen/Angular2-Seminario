import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { SearchPipe } from './searchPipe';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
import { CurrencyExchangeService } from "./currency-exchange.service";
import { WeatherComponent } from './weather/weather.component';
import { BreweryWeatherService } from './brewery-weather.service';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
 
@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    SearchPipe,
    CurrencyRateComponent,
    WeatherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, CurrencyExchangeService, BreweryWeatherService, ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
