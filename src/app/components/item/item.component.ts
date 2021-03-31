import {Component, Input} from '@angular/core';
import {City} from '../../interfaces/city';

@Component({
  selector: 'app-item',
  template: `
    <div class="item">
      <img alt="item image" [matTooltip]="itemName" src="https://render.albiononline.com/v1/item/{{itemId}}.png">
      <div class="infos">
        <div class="font-bold">{{itemPrice | currency: 'USD'}}</div>
        <small class="date"><i>{{itemPriceDate | date: 'short'}}</i></small>
        <div class="city">
          <div class="badge" [ngStyle]="cityStyles">{{itemCity}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemId: string;
  @Input() itemPrice: number;
  @Input() itemCity: City;
  @Input() itemPriceDate: Date;
  @Input() itemName: string;

  get cityStyles(): any {
    switch (this.itemCity) {
      case City.BlackMarket:
        return {
          color: 'white',
          'background-color': '#343a40'
        };
      case City.Bridgewatch:
        return {
          color: 'white',
          'background-color': '#b15013'
        };
      case City.Caerleon:
        return {
          color: 'white',
          'background-color': '#343a40'
        };
      case City.FortSterling:
        return {
          color: '#343a40',
          'background-color': '#ecebdc'
        };
      case City.Lymhurst:
        return {
          color: 'white',
          'background-color': '#2f3617'
        };
      case City.Martlock:
        return {
          color: 'white',
          'background-color': '#3a5f84'
        };
      case City.Thetford:
        return {
          color: 'white',
          'background-color': '#3a2140'
        };
      case City.ArthursRest:
      case City.MorganasRest:
      case City.MerlynsRest:
        break;
    }
  }
}
