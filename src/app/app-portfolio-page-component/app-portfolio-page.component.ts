import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-portfolio',
    templateUrl: './app-portfolio-page.component.html',
    styleUrls: ['./app-portfolio-page.component.sass']
})
export class AppPortfolioPageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
