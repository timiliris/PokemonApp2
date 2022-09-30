import { Injectable } from '@angular/core';
import TCGdex, {CardResume} from '@tcgdex/sdk';


@Injectable({
  providedIn: 'root'
})

export class CardsFRService {
  Cards:Array<CardResume> = [];
  constructor() {
  }
  async getAllCards(){
    const tcgdex = new TCGdex('en');
    const cards = await tcgdex.fetch('cards');
    console.log(cards)
    // @ts-ignore
    this.Cards =  cards ;
  }
}
