import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <a routerLink="/dashboard">Dashboard</a>
        <counties></counties>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = "Restaurant Inspections";
}
