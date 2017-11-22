import { Component, OnInit } from '@angular/core';

import { Flight } from '../entities/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  public from: string = 'Hamburg';
  public to: string = 'Graz';
  public date: string = (new Date()).toISOString();
  public selectedFlight: Flight;
  public flights: Flight[] = [];
  
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    // this.changePropertyDemo();
  }

  public search(): void {
      this.flightService
        .find(this.from, this.to)
        .subscribe(
          (flights: Flight[]) => {
              this.flights = flights;
          },
          (err) => {
              console.warn(err);
          }
      );;
  }

  public select(f: Flight): void {
    this.selectedFlight = f;
  }

  // Hiermit kann man Properties des aktuellen Objekts auslesen
  // und auch ändern.
  private changePropertyDemo() {
    console.log('this:', this);
    for (let property in this) {
      console.log('Property of this:', this[property]);
      if (this[property] == "Hamburg") {
        this[property] = "Berlin ist das neue Hamburg!";
        console.log('Property wurde geändert:', this[property]);
      }
    }
  }
}
