import {Component, OnInit, ViewChild} from '@angular/core';
import {CardsFRService} from "../shared/cards-fr.service";



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event, localId: any, id: any) {
    this.popover.event = e;
    this.cardsFR.getCardInfo(localId,id);
    this.isOpen = true;

  }
  constructor(public cardsFR: CardsFRService) { }
  ngOnInit() {
    this.cardsFR.getallSets();
  }
}
