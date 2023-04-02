import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './modules/demo-button-pipes-directive/demo-button.component';
import { ParentInputDemoComponent } from './modules/demo-input/parent-input-demo.component';
import { ParentNgContentComponent } from './modules/demo-ngcontent/parent-ngcontent.component';
import { ParentOutputDemoComponent } from './modules/demo-output/parent-output-demo.component';
import { RxjsExampleComponent } from './modules/demo-rxjs/rxjs-example.component';
import { ParentViewChildDemoComponent } from './modules/demo-viewchild/parent-viewchild-demo.component';

const routes: Routes = [
  { path: 'custom-button-demo', component: DemoButtonComponent },
  { path: 'ngcontent-demo', component: ParentNgContentComponent },
  { path: 'input-demo', component: ParentInputDemoComponent },
  { path: 'output-demo', component: ParentOutputDemoComponent },
  { path: 'viewchild-demo', component: ParentViewChildDemoComponent },
  {
    path: 'hello',
    loadChildren: () =>
      import('./modules/demo-lazyloading/hello.module').then(
        mod => mod.HelloModule
      )
  },
  { path: 'rxjs', component: RxjsExampleComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
