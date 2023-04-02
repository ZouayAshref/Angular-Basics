import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DemoButtonComponent } from './modules/demo-button-pipes-directive/demo-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentInputDemoComponent } from './modules/demo-input/parent-input-demo.component';
import { ChildInputDemoComponent } from './modules/demo-input/child-input-demo.component';
import { ParentNgContentComponent } from './modules/demo-ngcontent/parent-ngcontent.component';
import { ChildNgContentComponent } from './modules/demo-ngcontent/child-ngcontent.component';
import { ChildOutputDemoComponent } from './modules/demo-output/child-output-demo.component';
import { ParentOutputDemoComponent } from './modules/demo-output/parent-output-demo.component';
import { ChildViewChildDemoComponent } from './modules/demo-viewchild/child-viewchild-demo.component';
import { ParentViewChildDemoComponent } from './modules/demo-viewchild/parent-viewchild-demo.component';
import { RxjsExampleComponent } from './modules/demo-rxjs/rxjs-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, SharedModule],
  declarations: [
    AppComponent,
    DemoButtonComponent,
    ParentNgContentComponent,
    ChildNgContentComponent,
    ParentInputDemoComponent,
    ChildInputDemoComponent,
    ParentOutputDemoComponent,
    ChildOutputDemoComponent,
    ParentViewChildDemoComponent,
    ChildViewChildDemoComponent,
    RxjsExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
