import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output-demo.component.html'
})
export class ParentOutputDemoComponent implements OnInit {
  moyenne: number = 0;
  somme: number = 0;
  nbr: number = 0;
  children = ['A', 'B', 'C'];
  constructor() {}
  ngOnInit() {}

  computeAvg(note: number) {
    this.somme += note;
    this.nbr++;
    this.moyenne = this.somme / this.nbr;
  }
}
