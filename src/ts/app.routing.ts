import { Routes, RouterModule } from '@angular/router';

import { CountiesComponent } from './counties/counties.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantListComponent } from './restaurants/restaurantlist.component';

const appRoutes: Routes = [
    {
        path: 'counties',
        component: CountiesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: ':county_id/restaurants',
        component: RestaurantListComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot(appRoutes);
