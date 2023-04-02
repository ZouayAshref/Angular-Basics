import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input-demo.component.html'
})
export class ChildInputDemoComponent implements OnInit {
  @Input() childProperty: string;

  constructor() {}
  ngOnInit() {}
}
