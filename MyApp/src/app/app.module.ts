import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BeerCartComponent } from './beer-cart/beer-cart.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from "./beer-data.service";
import { CartService } from "./cart.service";
import { FilterInputPipe } from './filter-input.pipe';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from "@angular/router";
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        BeerCartComponent,
        BeerListComponent,
        FilterInputPipe,
        WeatherComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BeerDataService, CartService, FilterInputPipe, WeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
