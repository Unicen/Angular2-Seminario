import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({ 
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje = '';

  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

  enviarMensaje(name,mail,subject,message){
    let mensaje = {
      name: name,
      mail: mail,
      subject: subject,
      message: message
    }
    this.contactService.messageToServer(mensaje).subscribe(() => {
      this.mensaje = "Mensaje enviado con exito";
    });
  }

}
