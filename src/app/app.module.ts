import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { NavComponent } from './nav/nav.component';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatMenuModule, MatIconModule , MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { GeoService } from './geo.service';
import { AngularFireDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUp3Y-GD97Imt6axIjoY9zNz_M-bTObLA' })
  ],
  providers: [  AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
