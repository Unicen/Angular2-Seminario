import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { BeerListComponent } from './beer-list/beer-list.component';
import { ContactoComponent } from './contacto/contacto.component';


export const appRoutes: Routes = [
  { path: '', component: BeerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent},

];
