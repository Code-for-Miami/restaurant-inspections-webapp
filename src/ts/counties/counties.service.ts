import { Injectable } from '@angular/core';
import { County } from './county.model';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CountiesService {
  private url = 'http://198.199.73.168/fra/list-counties'
  constructor(private http: Http) { }
  getCounties() {
    return this.http.get(this.url)
      .map((response) => {
        let res = response.json();
        return res;
      });
  }
}
