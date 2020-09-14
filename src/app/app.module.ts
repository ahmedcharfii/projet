import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 0,
      "space": -18.5,
      "backgroundColor": "#EEE9D9",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 100,  
      "outerStrokeColor": "black",
      "outerStrokeGradientStopColor": "black",
      "innerStrokeColor": "black",
      "innerStrokeWidth": 20,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
    })
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


