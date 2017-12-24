

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule ,MatInputModule,MatDatepickerModule,
    MatNativeDateModule,MatExpansionModule ,MatProgressSpinnerModule,MatCardModule,
    MatCheckboxModule,MatStepperModule,MatDialogModule,MatIconModule } from '@angular/material';

@NgModule({

    imports:[MatButtonModule,MatToolbarModule,MatInputModule,
        MatDatepickerModule,MatNativeDateModule,MatExpansionModule, 
        MatProgressSpinnerModule,MatCardModule,MatCheckboxModule,
        MatStepperModule,MatDialogModule,MatIconModule ],

    exports:[MatButtonModule,MatToolbarModule,MatInputModule,
        MatDatepickerModule,MatNativeDateModule, MatExpansionModule,
        MatProgressSpinnerModule,MatCardModule,MatCheckboxModule,
        MatStepperModule,MatDialogModule,MatIconModule ],

})

export class MaterialModule {

}