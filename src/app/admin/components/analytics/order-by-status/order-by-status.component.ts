import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-by-status',
  templateUrl: './order-by-status.component.html',
  styleUrl: './order-by-status.component.css'
})
export class OrderByStatusComponent {

  @Input() data:any;
}
