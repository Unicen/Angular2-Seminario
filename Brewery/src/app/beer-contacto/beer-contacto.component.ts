import { Component, OnInit } from '@angular/core';
import { BeerContactoService } from '../beer-contacto.service';

@Component({
  selector: 'beer-contacto',
  templateUrl: './beer-contacto.component.html',
  styleUrls: ['./beer-contacto.component.css']
})
export class BeerContactoComponent implements OnInit {

  constructor(private contactoService: BeerContactoService) { }

  ngOnInit() {
  }

  postForm(email,subjet,message){
    console.log(email);
    console.log(subjet);
    console.log(message);
    var json = {
      email:email,
      subjet:subjet,
      message:message
    }
    this.contactoService.postFormData(json).subscribe(res => alert(res));
  }

}
