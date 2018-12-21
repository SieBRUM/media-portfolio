import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-user-experience',
    templateUrl: './app-user-experience-page.component.html',
    styleUrls: ['./app-user-experience-page.component.sass']
})
export class AppUserExperiencePageComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(
        private sidenavService: SidenavService
    ) { }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
