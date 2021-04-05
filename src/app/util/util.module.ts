import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { ModalSimplesComponent } from './modal/modal-simples.component';
@NgModule({
    imports: [  
        CommonModule
    ],
    declarations: [ 
        ModalSimplesComponent
    ],
    exports: [ 
        ModalSimplesComponent,
        CommonModule
    ],
    providers: [ ],
    entryComponents: [ ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })
 export class UtilModule {
 }