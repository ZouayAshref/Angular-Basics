import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ComponentsModule {}
