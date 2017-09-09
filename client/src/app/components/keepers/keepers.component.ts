import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  moduleId: module.id,
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  private title = 'Cuidadores';

  ngOnInit() {
    console.log('keepers.component cargado !!')
    
  }
}