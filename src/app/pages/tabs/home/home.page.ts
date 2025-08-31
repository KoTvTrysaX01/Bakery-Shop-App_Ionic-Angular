import { Component, computed, inject, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  location,
  cart,
  notifications,
  options,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonCol,
    IonRow,
    IonText,
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar
],
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
  }

  ngOnInit() {}
}
