import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCGKd5Vof7ESlO4-djSpaY4-ouwcQqfTQ8",
    authDomain: "recipe-book-greg.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
