import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-we-are-the-robots',
    templateUrl: './app-we-are-the-robots-page.component.html',
    styleUrls: ['./app-we-are-the-robots-page.component.sass']
})
export class AppWeAreTheRobotsPageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
