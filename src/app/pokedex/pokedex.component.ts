import { Component, OnInit } from '@angular/core';
import {CardsFRService} from "../shared/cards-fr.service";



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(public cardsFR: CardsFRService) { }
  ngOnInit() {
    this.cardsFR.getAllCards();
  }
  btnAllcards(){
    this.cardsFR.getAllCards();
  }

}
