import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
    private sidenav: MatSidenav = null;


    public setSidenav(sidenav: MatSidenav) {
        if (this.sidenav && sidenav) {
            sidenav.opened = this.sidenav.opened;
        } else if (sidenav) {
            sidenav.opened = true;
        }

        this.sidenav = sidenav;
    }

    public open() {
        if (this.sidenav) {
            return this.sidenav.open();
        }
    }


    public close() {
        if (this.sidenav) {
            return this.sidenav.close();
        }
    }

    public toggle(): void {
        if (this.sidenav) {
            this.sidenav.toggle();
        }
    }

    public getSidenav(): MatSidenav {
        return this.sidenav;
    }
}
