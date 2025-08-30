import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabButton, IonLabel, IonTabBar, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chatboxEllipses, person, heart, home, location } from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabButton, IonLabel, IonIcon, IonTabBar]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({
      chatboxEllipses,
      person,
      heart,
      home,
      location
    });
  }

  ngOnInit() {
  }

}


