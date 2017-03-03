import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {

filter:string;

  constructor(private searchServive:SearchService) { }

  ngOnInit() {
  }

  toSearch(value) {
    this.filter = value;
    this.searchServive.addToSearch(this.filter);
  }

}
