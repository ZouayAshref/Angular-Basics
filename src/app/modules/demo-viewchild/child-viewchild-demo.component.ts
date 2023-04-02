import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild-demo.component.html'
})
export class ChildViewChildDemoComponent implements OnInit {
  @Input() childProperty = 'valueChild';

  constructor() {}
  ngOnInit() {}
}
