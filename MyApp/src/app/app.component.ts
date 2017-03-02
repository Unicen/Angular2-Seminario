import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nav = [
      'Beers',
      'Factory',
      'Stores',
      'Find Us',
      'Contant'
  ];
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
