import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBIM6XVuaqeBDtyyB9Ef1U5oUv9Cue9BK8',
      authDomain: 'first-firebase-angular.firebaseapp.com',
      databaseURL: 'https://first-firebase-angular.firebaseio.com',
      projectId: 'first-firebase-angular',
      storageBucket: 'first-firebase-angular.appspot.com',
      messagingSenderId: '306103315077',
    }),
    AngularFirestoreModule,],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
