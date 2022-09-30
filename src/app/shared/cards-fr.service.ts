import { Injectable } from '@angular/core';
import TCGdex from '@tcgdex/sdk';


@Injectable({
  providedIn: 'root'
})

export class CardsFRService {
  Cards:[] = [];
  constructor() {
  }
  async getAllCards(){
    const tcgdex = new TCGdex('en');
    const [cards] = await Promise.all([tcgdex.fetch('cards')]);
    console.log(cards)
    // @ts-ignore
    this.Cards =  cards ;
  }
}
