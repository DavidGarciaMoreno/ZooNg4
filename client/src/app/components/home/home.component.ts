import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  private title = 'Bienvenido a NGZOO';

  ngOnInit() {
    console.log('home.component cargado !!')
    
  }
}