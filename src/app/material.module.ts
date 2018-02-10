

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule,MatToolbarModule ,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatExpansionModule ,MatProgressSpinnerModule,MatCardModule,
    MatCheckboxModule,MatStepperModule,MatDialogModule,MatIconModule,MatSnackBarModule } from '@angular/material';

@NgModule({
   
    imports:[MatButtonModule,MatToolbarModule,MatInputModule,
        MatDatepickerModule,MatNativeDateModule,MatExpansionModule, 
        MatProgressSpinnerModule,MatCardModule,MatCheckboxModule,
        MatStepperModule,MatDialogModule,MatIconModule,MatSnackBarModule ],

    exports:[MatButtonModule,MatToolbarModule,MatInputModule,
        MatDatepickerModule,MatNativeDateModule, MatExpansionModule, 
        MatProgressSpinnerModule,MatCardModule,MatCheckboxModule,
        MatStepperModule,MatDialogModule,MatIconModule,MatSnackBarModule ],

})

export class MaterialModule {

}