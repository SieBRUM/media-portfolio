import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SidenavService } from '../side-nav.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './app-menu-bar.component.html',
    styleUrls: ['./app-menu-bar.component.sass']
})
export class AppMenuBarComponent {
    activeLink = '';

    constructor(
        private router: Router,
        private sidenavService: SidenavService
    ) { }

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
