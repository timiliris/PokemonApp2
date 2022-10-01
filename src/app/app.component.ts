import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{

  public appPages = [
    { title: 'Connexion', url: '/folder/Login', icon: 'person-circle' },
    { title: 'Inscription', url: '/folder/Register', icon: 'clipboard' },


  ];
  public appPages2 = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Pokedex', url: '/folder/Pokedex', icon: 'paper-plane' },
    { title: 'Favoris', url: '/folder/Favoris', icon: 'heart' },
    { title: 'Boutique', url: '/folder/Boutique', icon: 'pricetags' },
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'bar-chart' },
    { title: 'Info', url: '/folder/Info', icon: 'help' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public authService: AuthenticationService) {

} ngOnInit() {

  }
}
