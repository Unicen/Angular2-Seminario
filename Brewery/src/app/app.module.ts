import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDataService } from './beer-data.service';
import { CartService } from './cart.service';
import { appRoutes } from './app.routes';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { SearchPipe } from './pipes/pipe.filter';
import { WeatherService } from './weather.service';
import { FirebaseService} from './firebase.service';
import { WeatherComponent } from './weather/weather.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    CartComponent,
    SearchPipe,
    WeatherComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BeerDataService, CartService, WeatherService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
