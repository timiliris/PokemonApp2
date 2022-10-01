import { Component, OnInit } from '@angular/core';
import {CardsFRService} from "../shared/cards-fr.service";
@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.scss'],
})
export class CarddetailsComponent implements OnInit {

  constructor(public cardsFR: CardsFRService) { }

  ngOnInit() {}

}
