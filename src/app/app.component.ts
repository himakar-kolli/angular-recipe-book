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
      apiKey: 'AIzazdf3EwsfMQXderH5modlso92ocOEw3R5', // Don't bother, this data is invalid here!
      authDomain: 'ng-recipe-book-5927e.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
