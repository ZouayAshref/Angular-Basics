import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [DirectivesModule, ComponentsModule, PipesModule],
  exports: [DirectivesModule, ComponentsModule, PipesModule]
})
export class SharedModule {}
