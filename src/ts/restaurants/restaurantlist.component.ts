import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
    selector: 'restaurant-list',
    template: `
        <table>
            <tr>
                <th>Restaurant Name</th>
            </tr>
            <tr *ngFor="let restaurant of restaurants">
                <td>{{ restaurant.businessName }}</td>
            </tr>
        <table>
    `,
    providers: [RestaurantsService]
})
export class RestaurantListComponent implements OnInit {
    restaurants: Restaurant[] = [];
    constructor(private RestaurantsService:RestaurantsService) {}
    ngOnInit() {

    }
}
