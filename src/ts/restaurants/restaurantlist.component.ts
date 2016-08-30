import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { ActivatedRoute, Params } from '@angular/router';



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
    countyId: Number = 0;
    constructor(private restaurantsService:RestaurantsService,
                private route: ActivatedRoute) {}
    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        console.log(params);
        let id = +params['county_id'];
        this.restaurantsService.getRestaurants(id)
          .subscribe(restaurants => this.restaurants = restaurants);
      });

    }
}
