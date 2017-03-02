import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
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
