import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickCountDirective } from './directives/click-count.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ClickCountDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPIcSUVVwiSwtmA7XTGMTOfumZvyHtUp4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
