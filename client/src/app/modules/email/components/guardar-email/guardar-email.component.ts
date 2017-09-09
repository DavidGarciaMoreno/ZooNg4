import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'guardar-email',
  templateUrl: 'guardar-email.component.html'
})
export class GuardarEmailComponent {
  private title: string = 'guardar email';
  private emailContacto: string;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}