import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrappingService } from '../services/scrapping.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  currentRoute: string;
  clusters: number;

  constructor(
    private router: Router,
    private scrappingService: ScrappingService
  ) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: { url: any }) => {
        // get url
        this.currentRoute = event.url.slice(1);
      });
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

  startKMeans(): void {
    this.scrappingService
      .getKMeansCollections(this.clusters)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
