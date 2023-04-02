import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThousandSeparatorPipe } from './thousand-separator.pipe';

@NgModule({
  declarations: [ThousandSeparatorPipe],
  imports: [CommonModule],
  exports: [ThousandSeparatorPipe]
})
export class PipesModule {}
