import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mostrar-email',
  templateUrl: 'mostrar-email.component.html'
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  private title: string = 'mostrar email';
  private emailContacto: string;


  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    this.emailContacto = null;
  }
}