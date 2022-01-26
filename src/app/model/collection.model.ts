import { Nft } from './nft.model';

export interface Collection {
  id?: string;
  number: string;
  name: string;
  volume_7d: string;
  sales_7d: string;
  volume_all_time: string;
  sales_all_time: string;
  avg_price_7d: string;
  total_supply: string;
  owners: string;
  owners_percentage: string;
  estimated_market_cap: string;
  added: string;
  link: string;
  image: string;
  imgCover: string;
  description: string;
  website: string;
  discord: string;
  twitter: string;
  instagram: string;
  nfts: Array<Nft>;
}

export interface RecentCollection {
  _id?: string;
  name?: string;
  link?: string;
  image?: string;
}

export interface TopCollection {
  _id?: string;
  name?: string;
  volume?: string;
  link?: string;
  image?: string;
}
