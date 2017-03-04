import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component'
import { AboutComponent } from './about/about.component'
import { WeatherComponent } from './weather/weather.component'

export const appRoutes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'beers', component: BeerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'weather', component: WeatherComponent },
];
