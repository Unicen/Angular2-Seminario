import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';
import { ContactService } from './contact.service';
import { BrewerydbService } from './brewerydb.service';

import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { BeerFilterPipe } from './beer-filter.pipe';
import { BeerContactComponent } from './beer-contact/beer-contact.component';
import { BeerBrewerydbComponent } from './beer-brewerydb/beer-brewerydb.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    BeerContactComponent,
    CartComponent,
    BeerFilterPipe,
    BeerContactComponent,
    BeerBrewerydbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ BeerDataService, CartService, ContactService, BrewerydbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
