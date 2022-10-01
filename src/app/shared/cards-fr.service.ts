import {Injectable, ViewChild} from '@angular/core';
import TCGdex, {CardResume, SetResume} from '@tcgdex/sdk';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class CardsFRService {
  Cards:Array<CardResume> = [];
  cardinfo:Array<CardResume> = [];
  Sets:Array<SetResume> = [];
  Set:Array<SetResume> = [];
  setcard:Array<CardResume> = [];
  cardcount: any;
  cardname: string;
  cardimage: string;
  carddesc: string;
  cardilus: string;
  cardstage: string;
  pokehp: number;
  cardcate: string;
  poketype: Array<string>;
  cardrarity: string;
  pokeattack: Array<{ cost?: Array<string>; name: string; effect?: string; damage?: string | number }>;
  constructor(public router: Router,
              private loadingCtrl: LoadingController) {
  }
  async getAllCards(){
    const tcgdex = new TCGdex('fr');
    const cards = await tcgdex.fetch('cards');
    this.Cards = cards.slice(0,1);

  }
  async getCardInfo(localId: any, id: any){
    await this.router.navigate(['folder/cardDetails']);
    const tcgdex = new TCGdex('fr');
    const cards = await tcgdex.fetch('sets',''+id,''+localId);
    // @ts-ignore
    this.cardinfo = cards;
    this.cardname = cards.name;
    this.cardimage = cards.image;
    this.carddesc = cards.description;
    this.cardilus = cards.illustrator;
    this.cardstage = cards.stage;
    this.cardcate = cards.category;
    this.pokehp = cards.hp;
    this.poketype = cards.types;
    this.cardrarity = cards.rarity;
    this.pokeattack = cards.attacks;
    console.log(cards)
  }
  async getallSets(){
    const tcgdex = new TCGdex('fr');
    const sets = await tcgdex.fetch('sets');
    this.Sets = sets;
  }
  async getSetinfo(id: any){
    await this.showLoading();
    const tcgdex = new TCGdex('fr');
    const set = await tcgdex.fetch('sets', ''+id);
    // @ts-ignore
    this.Set = set;
    this.setcard = set.cards;
    this.cardcount = set.cardCount.total;
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }
}
