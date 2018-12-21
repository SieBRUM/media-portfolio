import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SidenavService } from '../side-nav.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './app-menu-bar.component.html',
    styleUrls: ['./app-menu-bar.component.sass']
})
export class AppMenuBarComponent implements AfterViewInit {

    activeLink = '';
    selectedIndex: number;

    constructor(
        private router: Router,
        private sidenavService: SidenavService
    ) { }

    // Messy way to set correct active state
    ngAfterViewInit(): void {
        const url = window.location.pathname;
        if (url === '/home') {
            this.selectedIndex = 0;
        } else if (url === '/me') {
            this.selectedIndex = 1;
        } else if (url === '/projects/digitalfootprint') {
            this.selectedIndex = 2;
        } else if (url === '/projects/adayinthelife') {
            this.selectedIndex = 3;
        } else if (url === '/projects/nologo') {
            this.selectedIndex = 4;
        } else if (url === '/projects/bigdata') {
            this.selectedIndex = 5;
        } else if (url === '/projects/wearetherobots') {
            this.selectedIndex = 6;
        } else if (url === '/projects/userexperience') {
            this.selectedIndex = 7;
        } else if (url === '/projects/portfolio') {
            this.selectedIndex = 8;
        } else if (url === '/projects/frankenstein') {
            this.selectedIndex = 9;
        } else if (url === '/projects/prototyping') {
            this.selectedIndex = 10;
        } else if (url === '/projects/gamerealisation') {
            this.selectedIndex = 11;
        }
    }

    isActive(route: string): boolean {
        return this.router.url === route;
    }

    toggleSideNav(): void {
        this.sidenavService.toggle();
    }

    getIcon(): string {
        if (this.sidenavService.getSidenav()) {
            return this.sidenavService.getSidenav().opened ? 'arrow_back' : 'menu';
        }

        return 'menu';
    }
}
