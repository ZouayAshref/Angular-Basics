import { NgModule } from '@angular/core';
import { HelloComponent } from './hello-component';
import { HelloRoutingModule } from './hello-routing.module';

@NgModule({
  imports: [HelloRoutingModule],
  declarations: [HelloComponent]
})
export class HelloModule {}
