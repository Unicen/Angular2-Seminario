import { Component, OnInit , Inject} from '@angular/core';
import { BeerContactService } from '../beer-contact.service';
import { Contact } from './contacto';
import {FormBuilder,  Validators, ReactiveFormsModule } from '@angular/forms';
//FormGroup, FormControl,
@Component({
  selector: 'about-brewery',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
    public contactForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        message: ["", Validators.required]
      });
      constructor(public fb: FormBuilder, private beerContactService : BeerContactService) {}
      contactar(event) {
      this.beerContactService.contactar(this.contactForm.value).subscribe();
      //console.log(this.contactForm.value);
      }

 

  ngOnInit() {
  }

  

}
