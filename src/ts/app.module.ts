import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountiesComponent } from './counties/counties.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountiesService } from './counties/counties.service';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CountiesComponent,
        DashboardComponent
    ],
    providers: [
        CountiesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
