import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  private title = 'Contacto';
  private emailContacto: string;

  ngOnInit() {
    console.log('contact.component cargado !!')
    
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}