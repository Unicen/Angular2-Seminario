import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';

import { SearchService } from './search.service';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerSearchPipe } from './beer-search.pipe';
import { BeerWeatherService } from './beer-weather.service';
import { BeerWeatherComponent } from './beer-weather/beer-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    BeerSearchComponent,
    BeerSearchPipe,
    BeerWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, SearchService, BeerWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
