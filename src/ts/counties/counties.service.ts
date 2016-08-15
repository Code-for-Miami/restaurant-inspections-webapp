import { Injectable } from '@angular/core';
import { County } from './county.model';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CountiesService {
    private url = 'http://127.0.0.1:8080/list-counties'
    constructor(private http: Http) {}
    getCounties() {
        return this.http.get(this.url)
            .map((response) => {
                let res = response.json();
                return res;
            });
    }
}
