import { NgModule } from '@angular/core';
import {
    MatTabsModule, MatCommonModule,
    MatSidenavModule, MatGridListModule, MatButtonModule, MatIconModule, MatFormFieldControl, MatFormFieldModule, MatSnackBarModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

// use this class to import mat modules
@NgModule({
    imports: [
        MatTabsModule,
        MatCommonModule,
        MatSidenavModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSnackBarModule
    ],
    exports: [
        MatTabsModule,
        MatCommonModule,
        MatSidenavModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSnackBarModule
    ]
})
export class MatComponnetsModule { }
