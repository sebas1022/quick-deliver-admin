import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crear-usuario',
    templateUrl: './crear-usuario.component.html',
    styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

    // The schema that will be used to generate a form
    mySchema = {
        "properties": {
            "usuario": {
                "type": "string",
                "description": "Usuario "
            },
            "contrasena": {
                "type": "string",
                "description": "Password "
            },
            "email": {
                "type": "string",
                "description": "email ",
                "format": "email "
            },
            "activo": {
                "type": "boolean",
                "description": "Activo "
            }
        },
        "required": ["usuario", "contrasena", "email","activo"]
    }

    myModel = {
        usuario: "john.doe@example.com",
        contrasena: "john.doe@example.com",
        email: "john.doe@example.com",
        activo: "",
    };
    constructor() { }

    ngOnInit() {
    }

}
