import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-digital-footprint-page',
    templateUrl: './app-digital-footprint-page.component.html',
    styleUrls: ['./app-digital-footprint-page.component.sass']
})
export class AppDigitalFootprintComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit() {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
