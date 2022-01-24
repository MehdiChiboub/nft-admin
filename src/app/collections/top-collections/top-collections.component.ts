import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Collection } from 'src/app/model/collection.model';
import { ScrappingService } from 'src/app/services/scrapping.service';

@Component({
  selector: 'app-top-collections',
  templateUrl: './top-collections.component.html',
  styleUrls: ['./top-collections.component.scss'],
  providers: [DecimalPipe]
})
export class TopCollectionsComponent implements OnInit {

  COLLECTION: Collection[] = [];
  page = 1;
  pageSize = 10;
  collectionSize = this.COLLECTION.length;
  collections: Collection[];
  collections$: Observable<Collection[]>;
  filter = new FormControl('');

  constructor(
    private pipe: DecimalPipe,
    private service: ScrappingService
  ) {
    this.refreshCollections();
  }

  ngOnInit(): void {
    this.getData();
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

  getData(): void {
    this.service
      .getTopCollections()
      .then((res: any) => {
        this.COLLECTION = res;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

}
