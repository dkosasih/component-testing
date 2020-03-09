import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BasicComponent } from './basic/basic.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [AppComponent, BasicComponent, ContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
