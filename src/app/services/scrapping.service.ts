import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {

  constructor(private http: HttpClient) { }

  recentCollections(): any {
    return this.http
      .get(`http://127.0.0.1:5000/recent-collections`)
      .toPromise();
  }

  topCollections(): any {
    return this.http
      .get(`http://127.0.0.1:5000/top-collections`)
      .toPromise();
  }

  allCollections(): any {
    return this.http
      .get(`http://127.0.0.1:5000/all-collections`)
      .toPromise();
  }

  getKMeansCollections(clusters: number): any {
    return this.http
      .get(`localhost:8083/collections/analysis?clusters=${clusters}`)
      .toPromise();
  }
}
