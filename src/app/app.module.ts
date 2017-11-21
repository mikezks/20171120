import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BASE_URL } from './app.tokens';
import { FlightService } from './services/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_URL,
      useValue: 'http://www.angular.at'
    },
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
