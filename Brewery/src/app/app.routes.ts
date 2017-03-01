import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component'
import { BeerAboutComponent } from './beer-about/beer-about.component'

export const appRoutes : Routes = [
    { path:'', component:BeerListComponent },
    { path:'about', component:BeerAboutComponent }
]