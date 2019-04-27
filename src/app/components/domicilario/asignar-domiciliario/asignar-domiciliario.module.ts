import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AsignarDomiciliarioComponent } from './asignar-domiciliario.component';

@NgModule({
    declarations: [AsignarDomiciliarioComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [AsignarDomiciliarioComponent],

})
export class AsignarDomiciliarioModule { }
