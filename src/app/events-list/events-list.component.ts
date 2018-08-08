import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1: any = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '123 Maria Street',
      city: 'Toronto',
      country: 'Canada'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(e: string) {
    console.log("Parent component received click event: " + e);
  }

}
