import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje = '';


  formu = {
        name:'',
        mail: '',
        subject: '',
        message: ''}


  constructor(private contactService : ContactService) { }

  ngOnInit() {
  }

  enviarMensaje(){
    this.contactService.messageToServer(this.formu).subscribe(() => {
      this.mensaje = "Mensaje enviado con exito";
      this.formu = {
            name:'',
            mail: '',
            subject: '',
            message: ''}
    });
  }

}
