import {Component, Input} from '@angular/core';
import {City} from '../../interfaces/city';

@Component({
  selector: 'app-item',
  template: `
    <div class="item">
      <img alt="item image" [matTooltip]="itemName" src="https://render.albiononline.com/v1/item/{{itemId}}.png">
      <div class="infos">
        <div class="font-bold">{{itemPrice | currency: 'USD'}}</div>
        <small class="date" matTooltip="Last Seen"><i>{{itemPriceDate | date: 'short'}}</i></small>
        <div class="badge-wrapper">
          <div [ngStyle]="cityStyles" class="badge city" matTooltip="City">{{itemCity}}</div>
          <div class="quality" matTooltip="Quality">
            <ng-container [ngSwitch]="itemQuality">
              <span *ngSwitchCase="1" class="badge" style="color: white; background-color: #9e9d99">Normal</span>
              <span *ngSwitchCase="2" class="badge" style="color: white; background-color: #6782a6">Good</span>
              <span *ngSwitchCase="3" class="badge" style="color: white; background-color: #774a29">Outstanding</span>
              <span *ngSwitchCase="4" class="badge" style="color: black; background-color: #f6f9f9">Excellent</span>
              <span *ngSwitchCase="5" class="badge" style="color: white; background-color: #fea52f">Masterpiece</span>
            </ng-container>
          </div>
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
  @Input() itemQuality: string;

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
          color: 'black',
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
