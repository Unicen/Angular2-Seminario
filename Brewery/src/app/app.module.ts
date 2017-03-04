import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { WeatherComponent } from './weather/weather.component';
import { ContactComponent } from './contact/contact.component';

import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';
import { WeatherDataService } from './weather-data.service';
import { ContactFormService } from './contact-form.service';

import { appRoutes } from './app.routes';

import { filterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    filterPipe,
    WeatherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, WeatherDataService, ContactFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
