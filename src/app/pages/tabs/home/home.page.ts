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
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from "src/app/components/banner/banner.component";

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
    IonToolbar,
    ListHeadingComponent,
    BannerComponent
],
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
  }

  ngOnInit() {}
}
