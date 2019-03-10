import { Component, OnInit } from '@angular/core';

// import core firebase client (required)
import firebase from '@firebase/app';

// import Firebase Authentication
import '@firebase/auth';

// import Firebase Realtime Database
import '@firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGDTtGNC4FkKpSe85qb2wLHzNi2xkxFy8',
      authDomain: 'ng-recipe-book.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
