import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
    selector: 'restaurant-list',
    template: `
        <table>
            <tr>
                <th>Restauran Name</th>
            </tr>
            <tr *ngFor="let restaurant of restaurants">
                <td>{{ restaurant.businessName }}</td>
            </tr>
        <table>
    `
})
export class RestaurantListComponent {
    restaurants: Restaurant[] = [];
}
