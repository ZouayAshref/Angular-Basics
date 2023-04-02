import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() numberToFormat: number;
  @Output() onClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    /*...*/
  }
  onClickButton() {
    this.onClick.emit(this.numberToFormat);
  }
}
