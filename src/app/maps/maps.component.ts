import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service';
import { google } from '@agm/core/services/google-maps-types';
import { DistanceService } from '../distance.service';
import { IDistanceMatrix } from '../IDistance';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{

  lat: number;
  lng: number;

  originLonLat: string;
  destinationLonLat: string;

  clickLat: number;
  clickLng: number;

  markers: any;
  subscription: any;

  distance : number;

  isclicked: boolean = false;

  distanceData: IDistanceMatrix;

  constructor(private _distanceMatric : DistanceService) { }

  ngOnInit() {
    this.getUserLocation();
   
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
   
    this.destinationLonLat = this.clickLat.toString()+this.clickLng.toString();

    this.originLonLat = this.lat.toString()+this.lng.toString();
    this._distanceMatric.getImageList(this.originLonLat,this.destinationLonLat).subscribe(data => {
      this.distanceData = data
    });

    this.getDistance();

  }

   getDistance(){
     this.distance = this.distanceData.rows[0].elements[0].distance.value;
   }
}
