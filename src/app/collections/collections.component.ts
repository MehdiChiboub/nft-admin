import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { filter, map, startWith } from 'rxjs/operators';
import { Collection } from '../model/collection.model';
import { ScrappingService } from '../services/scrapping.service';
import { CollectionsModule } from './collections.module';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  providers: [DecimalPipe]
})
export class CollectionsComponent implements OnInit {

  COLLECTION: Collection[] = [];
  page = 1;
  pageSize = 10;
  collectionSize = this.COLLECTION.length;
  collections: Collection[];
  collections$: Observable<Collection[]>;
  filter = new FormControl('');
  currentRoute: string;
  clusters: number;

  constructor(
    private pipe: DecimalPipe,
    private router: Router,
    private scrappingService: ScrappingService
  ) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: any }) => {
        // get url
        this.currentRoute = event.url.slice(1);
      });
    this.refreshCollections();
  }

  onStoreData() {

  }

  ngOnInit(): void {}

  scroll(id: string): void {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  getAllCollections(): void {
    this.scrappingService
      .allCollections()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  getTopCollections(): void {
    this.scrappingService
      .topCollections()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  getRecentCollections(): void {
    this.scrappingService
      .recentCollections()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  startKMeans(clustersNumber): void {
    this.scrappingService
      .getKMeansCollections(clustersNumber)
      .then((res: any) => {
        console.log(res);
        res.map(item => {
          // avg_price_7d: "67.74"
          // estimatedMarketCap: "677297.53"
          // name: "CryptoPunks"
          // number: "1"
          // owners: "3329.0"
          // owners_percentage: "33.29"
          // sales_7d: "57.0"
          // sales_all_time: "18564.0"
          // totalSupply: "9999.0"
          // volume_7d: "3860.98"
          // volume_all_time: "783815.61"


          // this.COLLECTION. = item.;

        });
        this.COLLECTION = res;
        this.refreshCollections();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  refreshCollections(): void {
    this.collections = this.COLLECTION
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
