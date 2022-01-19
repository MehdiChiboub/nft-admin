import { Component, OnInit, PipeTransform, ViewEncapsulation } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Collection } from '../model/collection.model';

const COLLECTION: Collection[] = [
  {
    number: '1',
    name: 'CryptoPunks',
    volume_7d: '3,860.98',
    sales_7d: '57',
    volume_all_time: '783,815.61',
    sales_all_time: '18,564',
    avg_price_7d: '67.74',
    total_supply: '9,999',
    owners: '3,329',
    owners_percentage: '33.29%',
    estimated_market_cap: '677,297.53',
    added: '2021/04/30',
    link: 'https://rarity.tools/cryptopunks',
    image: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s48',
    image_cover: 'https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=s2500',
    description: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.',
    website: 'https://www.larvalabs.com/cryptopunks',
    discord: 'https://discord.gg/tQp4pSE',
    twitter: 'https://twitter.com/larvalabs',
    instagram: 'https://instagram.com/boredapeyachtclub',
    nfts: [
      {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk8348.png',
        title: 'CryptoPunk #8348'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7804.png',
        title: 'CryptoPunk #7804'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7523.png',
        title: 'CryptoPunk #7523'
      }
    ]
  },
  {
    number: '1',
    name: 'boredapeyachtclub',
    volume_7d: '3,860.98',
    sales_7d: '57',
    volume_all_time: '783,815.61',
    sales_all_time: '18,564',
    avg_price_7d: '67.74',
    total_supply: '9,999',
    owners: '3,329',
    owners_percentage: '33.29%',
    estimated_market_cap: '677,297.53',
    added: '2021/04/30',
    link: 'https://rarity.tools/cryptopunks',
    image: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s48',
    image_cover: 'https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=s2500',
    description: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.',
    website: 'https://www.larvalabs.com/cryptopunks',
    discord: 'https://discord.gg/tQp4pSE',
    twitter: 'https://twitter.com/larvalabs',
    instagram: 'https://instagram.com/boredapeyachtclub',
    nfts: [
      {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk8348.png',
        title: 'CryptoPunk #8348'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7804.png',
        title: 'CryptoPunk #7804'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7523.png',
        title: 'CryptoPunk #7523'
      }
    ]
  },
  {
    number: '1',
    name: 'CryptoPunks',
    volume_7d: '3,860.98',
    sales_7d: '57',
    volume_all_time: '783,815.61',
    sales_all_time: '18,564',
    avg_price_7d: '67.74',
    total_supply: '9,999',
    owners: '3,329',
    owners_percentage: '33.29%',
    estimated_market_cap: '677,297.53',
    added: '2021/04/30',
    link: 'https://rarity.tools/cryptopunks',
    image: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s48',
    image_cover: 'https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=s2500',
    description: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.',
    website: 'https://www.larvalabs.com/cryptopunks',
    discord: 'https://discord.gg/tQp4pSE',
    twitter: 'https://twitter.com/larvalabs',
    instagram: 'https://instagram.com/boredapeyachtclub',
    nfts: [
      {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk8348.png',
        title: 'CryptoPunk #8348'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7804.png',
        title: 'CryptoPunk #7804'
      }, {
        image: 'https://www.larvalabs.com/public/images/cryptopunks/punk7523.png',
        title: 'CryptoPunk #7523'
      }
    ]
  }
];

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  providers: [DecimalPipe]
})
export class CollectionsComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = COLLECTION.length;
  collections: Collection[];
  collections$: Observable<Collection[]>;
  filter = new FormControl('');

  constructor(private pipe: DecimalPipe) {
    this.refreshCollections();
  }

  ngOnInit(): void {}

  refreshCollections(): void {
    this.collections = COLLECTION
      .map((collection, i) => ({number: i + 1, ...collection}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    this.collections$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.pipe))
    );
  }

  search(text: string, pipe: PipeTransform): Collection[] {
    return this.collections.filter(collection => {
      const term = text.toLowerCase();
      return collection.name.toLowerCase().includes(term);
    });
  }

}
