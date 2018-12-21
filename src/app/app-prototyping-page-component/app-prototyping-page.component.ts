import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-prototyping',
    templateUrl: './app-prototyping-page.component.html',
    styleUrls: ['./app-prototyping-page.component.sass']
})
export class AppPrototypingPageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
