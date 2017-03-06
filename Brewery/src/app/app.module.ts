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

import { BeerNameFilter } from './pipes/name-pipe';

import { BeerWeatherComponent } from './beer-weather/beer-weather.component';
import { BeerComponent } from './beer/beer.component';
import { BeerWeatherDataService } from './beer-weather-data.service';
import { BeerContactoComponent } from './beer-contacto/beer-contacto.component';
import { BeerContactoService } from './beer-contacto.service';



@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    BeerNameFilter,
    BeerWeatherComponent,
    BeerComponent,
    BeerContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, BeerWeatherDataService, BeerContactoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
