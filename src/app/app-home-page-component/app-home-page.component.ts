import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../side-nav.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './app-home-page.component.html',
    styleUrls: ['./app-home-page.component.sass']
})
export class AppHomePageComponent implements OnInit {
    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(null);
    }
}
