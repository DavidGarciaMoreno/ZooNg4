import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'admin-list',
  templateUrl: 'list.component.html'
})
export class ListComponent {
  private title = 'Listado';
  numbers = new Array(10);
}