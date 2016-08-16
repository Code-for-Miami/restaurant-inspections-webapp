import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Headers, Http } from '@angular/http';

@Injectable()
export class RestaurantService {
  private url = 'http://198.199.73.168/fra/county';
  constructor(private http: Http) { }
  getRestaurants(countyId) {
    return this.http.get(`${this.url}/${countyId}`)
      .map((response) => {
        let res = response.json();
        return res;
      });
  }
}
