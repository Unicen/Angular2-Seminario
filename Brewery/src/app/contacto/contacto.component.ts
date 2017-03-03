import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService} from '../firebase.service';

@Component({
  selector: 'beer-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public loginForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    consulta: ["", Validators.required]
  });
  constructor(public fb: FormBuilder, private firebaseServ : FirebaseService) {}
  doLogin(event) {
  this.firebaseServ.contactar(this.loginForm.value).subscribe();
  console.log(this.loginForm.value);
  }

  ngOnInit() {
  }

}
