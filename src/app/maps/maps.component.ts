import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{

  lat: number;
  lng: number;

  clickLat: number;
  clickLng: number;

  markers: any;
  subscription: any;

  isclicked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
    
  }


  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;




     });
   }
  }
  onClick(ent) {
    console.log(ent);
    this.clickLat = ent.coords.lat;
    this.clickLng = ent.coords.lng;
    this.isclicked = true;
    console.log(this.clickLng);
  }
}
