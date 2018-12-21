import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-big-data',
    templateUrl: './app-big-data-page.component.html',
    styleUrls: ['./app-big-data-page.component.sass']
})
export class AppBigDataPageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
