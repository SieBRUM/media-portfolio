import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-a-day-in-a-life',
    templateUrl: './app-a-day-in-a-life-page.component.html',
    styleUrls: ['./app-a-day-in-a-life-page.component.sass']
})
export class AppADayInALifePageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit() {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
