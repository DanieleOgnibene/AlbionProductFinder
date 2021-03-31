export interface Item {
  buy_price_max: number;
  buy_price_max_date: Date;
  buy_price_min: number;
  buy_price_min_date: Date;
  city: string;
  item_id: string;
  quality: number;
  sell_price_max: number;
  sell_price_max_date: Date;
  sell_price_min: number;
  sell_price_min_date: Date;
  name?: string;
}
