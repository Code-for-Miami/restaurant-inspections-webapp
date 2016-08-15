import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
        <h3>{{ Title }}</h3>
    `
})
export class DashboardComponent {
    title = 'Dashboard';
}
