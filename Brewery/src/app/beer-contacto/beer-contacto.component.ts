import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-contacto',
  templateUrl: './beer-contacto.component.html',
  styleUrls: ['./beer-contacto.component.css']
})
export class BeerContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postForm(email,subjet,message){
    console.log(email);
    console.log(subjet);
    console.log(message);
  }

}
