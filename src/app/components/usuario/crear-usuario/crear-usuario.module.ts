import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";

import { CrearUsuarioComponent } from './crear-usuario.component';

@NgModule({
    declarations: [ CrearUsuarioComponent ],
    imports: [
        SchemaFormModule.forRoot(),
        CommonModule
    ],
    exports:[ CrearUsuarioComponent ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})
export class CrearUsuarioModule { }
