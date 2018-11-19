import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service';
import { google } from '@agm/core/services/google-maps-types';

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

  distance : number;

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
    this.getDistance();
  }

   getDistance(){
    this.distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng( this.clickLat, this.clickLng));
   }
}
