import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  moduleId: module.id,
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  private title = 'Animales';

  ngOnInit() {
    console.log('animals.component cargado !!')
    
  }
}