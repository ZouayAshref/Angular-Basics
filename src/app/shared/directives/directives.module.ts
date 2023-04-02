import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DigitOnlyDirective } from './digit-only.directive';

@NgModule({
  declarations: [DigitOnlyDirective],
  imports: [CommonModule],
  exports: [DigitOnlyDirective]
})
export class DirectivesModule {}
