import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantsService {
  private url = 'http://198.199.73.168/fra/county';
  constructor(private http: Http) { }

  getRestaurants(countyId) {
    let count = 0;
    return this.http.get(`${this.url}/${countyId}?startDate=2016-07-01&endDate=2016-07-10`)
      .map((response) => {
        let res = response.json();
        return res;
      });
    }
}
