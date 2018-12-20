import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './app-menu-bar.component.html',
    styleUrls: ['./app-menu-bar.component.sass']
})
export class AppMenuBarComponent {
    links = ['home', 'ik'];
    activeLink = '';

    constructor(
        private router: Router
    ) { }

    isActive(route: string): boolean {
        return this.router.url === route;
    }

}
