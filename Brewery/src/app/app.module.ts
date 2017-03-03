import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { WeatherDataService} from './weather-data.service'
import { CartService } from './cart.service';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { filterPipe } from './filter.pipe';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    filterPipe,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService , WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
