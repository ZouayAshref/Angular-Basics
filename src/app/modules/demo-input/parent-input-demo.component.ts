import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input-demo.component.html'
})
export class ParentInputDemoComponent implements OnInit {
  parentProperty: string = 'valueOfParentProperty';
  constructor() {}
  ngOnInit() {}
}
