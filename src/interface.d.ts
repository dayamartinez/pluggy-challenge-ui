export interface Slippage {
  _id: string;
  source: string;
  buy_price_slippage: number;
  sell_price_slippage: number;
}

export interface Quotes {
  _id: string;
  source: string;
  buy_price: number;
  sell_price: number;
  _updatedAt?: string;
}

export interface Extended {
  buy_price: number;
  buy_price_slippage: number;
  sell_price: number;
  sell_price_slippage: number;
  source: string;
  _id: string;
  _updatedAt?: string;
}
