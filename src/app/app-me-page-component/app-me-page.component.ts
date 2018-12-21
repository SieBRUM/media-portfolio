import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-me-page',
    templateUrl: './app-me-page.component.html',
    styleUrls: ['./app-me-page.component.sass']
})
export class AppMePageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService,
        public snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sidenavService.setSidenav(this.sidenav);
    }

    onOpenEasteregg() {
        this.snackBar.open('Localhost gaat niet werken eh :^)', 'Ugh das waar ook', {
            panelClass: 'snackModal'
        });
    }
}
