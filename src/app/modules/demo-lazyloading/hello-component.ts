import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Hello, {{ msg }}</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  msg = 'Lazy loading works !';
  constructor() {}

  ngOnInit() {}
}
