import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-beer-contact',
  templateUrl: './beer-contact.component.html',
  styleUrls: ['./beer-contact.component.css']
})
export class BeerContactComponent implements OnInit{
  
  contact:Contact

  constructor(private contactService: ContactService){ 

  }

  ngOnInit(){
  }

  sendContact(name: String, email: String, message: String){
    this.contactService.sendContact(name,email,message);
    name='';
    email='';
    message='';
  }
 
}
