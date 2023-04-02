import { Component } from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.css']
})
export class DemoButtonComponent {
  notFormattedNumber: number;
  formattedNumber: number;
  msg = 'The formatted number:';
  show = false;

  getFormattedNumber(event) {
    this.formattedNumber = parseInt(event);
    this.show = true;
  }
}
