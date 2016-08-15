import { Component, OnInit } from '@angular/core';
import { County } from './county.model';
import { CountiesService } from './counties.service';

@Component({
    selector: 'counties',
    template: `
        <table>
            <tr><th colspan="4">Counties</th>
            <tr><th>District</th><th>Number</th><th>Name</th><th>Inspections</th></tr>
            <tr *ngFor="let county of counties"><td>{{ county.district }}</td><td>{{ county.countynumber }}</td><td>{{ county.countyname }}</td><td>{{ county.inspections }}</td>
        </table>
    `,
    styles: [`
        table {
            margin: 1em;
        }
        th {
            color: #eee;
            background-color: #222;
        }
        td {
            color: #222;
            background-color: #eee;
        }
    `],
    providers: [CountiesService]
})
export class CountiesComponent implements OnInit{
    counties: County[];
    constructor(private countiesService: CountiesService) {}

    ngOnInit() {
        this.countiesService.getCounties()
            .subscribe(counties => this.counties = counties);
    }

}
