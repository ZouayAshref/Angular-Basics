import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output-demo.component.html'
})
export class ChildOutputDemoComponent implements OnInit {
  @Input() nom: string;
  @Output() message = new EventEmitter<number>();
  note: number;
  buttonStatus: boolean = false;

  constructor() {}
  ngOnInit() {}

  send() {
    this.message.emit(this.note);
    this.buttonStatus = true;
  }
}
