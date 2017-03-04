import { Component } from '@angular/core';
import { FilterInputPipe } from './filter-input.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}

@Component({
  selector: 'beer-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class Beerlist {
}

@Component({
  selector: 'beer-cart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class Beercart {
}
