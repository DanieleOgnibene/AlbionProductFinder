import {Item} from './item';

export interface Result {
  buy: Item;
  sell: Item;
  profit: number;
  profitPerc: number;
}
