import { Component, OnInit } from '@angular/core';
import { County } from './county.model';
import { CountiesService } from './counties.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'counties',
  template: `
        <table>
            <tr><th colspan="4">Counties</th>
            <tr><th>District</th><th>Number</th><th>Name</th><th>Inspections</th></tr>
            <tr *ngFor="let county of counties" (click)=selectCounty(county)><td>{{ county.district }}</td><td>{{ county.countynumber }}</td><td>{{ county.countyname }}</td><td>{{ county.inspections }}</td>
        </table>
    `,
  styleUrls: ['dist/counties.component.css'],
  providers: [CountiesService]
})
export class CountiesComponent implements OnInit {
  counties: County[];
  selectedCounty: County;
  constructor(private countiesService: CountiesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.countiesService.getCounties()
      .subscribe(counties => this.counties = counties);
  }

  selectCounty(county) {
    this.selectedCounty = county;
    let link = ['/', this.selectedCounty.countynumber]

    // this.router.navigate(link);
  }

}
