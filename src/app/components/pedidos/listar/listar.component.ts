import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectorService } from '../../../services/connector.service';

@Component({
    selector: 'app-listar-pedidos',
    templateUrl: './listar.component.html',
    styleUrls: ['./listar.component.scss']
})
export class ListarPedidosComponent implements OnInit {

    constructor(private connector: ConnectorService, private router: Router) { }
    pedidos;

    ngOnInit() {
        this.connector.getData('pedido').then(data => {
            this.pedidos = data;
        });
    }
    goToAsignar(e, id) {
        this.router.navigate(['/domi/asignar',id]);
    }

}
