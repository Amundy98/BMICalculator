import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricBMIComponent } from './metric-bmi/metric-bmi.component';
import { EngBMIComponent } from './eng-bmi/eng-bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricBMIComponent,
    EngBMIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
