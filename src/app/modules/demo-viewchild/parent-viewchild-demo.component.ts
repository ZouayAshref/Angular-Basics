import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewChildDemoComponent } from './child-viewchild-demo.component';

@Component({
  selector: 'app-parent-viewchild',
  templateUrl: './parent-viewchild-demo.component.html'
})
export class ParentViewChildDemoComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildViewChildDemoComponent, { static: false })
  child: ChildViewChildDemoComponent;
  parentProperty = 'valueOfParentProperty';
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.child.childProperty);
  }
  ngOnInit() {
    //The commented line below used when static : true
    // console.log(this.child.childProperty);
  }
}
