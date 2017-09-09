import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class TiendaComponent implements OnInit {
  public titulo: string;
  public status;

  constructor() {
    this.titulo = 'Esta es la tienda';
    this.status = 'inactive';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      $('#textojq').slideToggle();
    });

    $('#caja').dotdotdot({});
  }

  textoRichEditor(content) {
    console.log(content)
  }

  cambiarEstado() {
    if (this.status == 'inactive') {
      this.status = 'active';
    }
    else {
      this.status = 'inactive';
    }
  }
}