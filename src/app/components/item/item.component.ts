import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div class="item">
      <img src="https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/{{itemId}}" alt="item image">
      <div class="infos">
        <div class="price">{{itemPrice | currency: 'USD'}}</div>
        <div class="city">{{itemCity}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemId: string;
  @Input() itemPrice: number;
  @Input() itemCity: string;
}
