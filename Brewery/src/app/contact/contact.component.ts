import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../contact-form.service';

@Component({
  selector: 'contacto-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactFormService : ContactFormService) { }

  ngOnInit() {
  }

  sendForm(nombre,email,mensaje){
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);
    var json = {
      nombre:nombre,
      email:email,
      mensaje:mensaje
    }
    this.contactFormService.sendInfo(json).subscribe(respBD => alert(respBD));
  }

}
