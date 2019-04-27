import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { ConnectorService } from '../../../services/connector.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-asignar-domiciliario',
    templateUrl: './asignar-domiciliario.component.html',
    styleUrls: ['./asignar-domiciliario.component.scss']
})
export class AsignarDomiciliarioComponent implements OnInit {
    domiciliarios;
    pedidoData;
    formData = {
        idDomiciliario: '',
        tiempoEstimado: ''
    };
    formulario: FormGroup;
    domiciliarioAsing;
    
    private idPedido: Params;
    constructor(private route: ActivatedRoute, private connector: ConnectorService, private router: Router) {
        this.connector.getData('domiciliario')
            .then(data => {
                this.domiciliarios = data;
            });
        
            this.formulario = new FormGroup({
                idDomiciliario: new FormControl('', [Validators.required]),
                tiempoEstimado: new FormControl('', [Validators.required])
            });
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.idPedido = params['idPedido'];
            this.connector.getData('pedido/'+this.idPedido)
                .then(data => {
                    this.pedidoData = data;
                });
        });
    }

    onSubmit() {
        this.connector.getData('domiciliario/'+this.formData.idDomiciliario)
                .then(data => {
                    const dataDomi = {
                        tiempoEstimado: this.formData.tiempoEstimado+ " Minutos",
                        estado: ['En Camino'],
                        domiciliario : data
                    };
                    this.asignarDomiciliario(dataDomi);
                });
    }

    asignarDomiciliario(dataDomi) {
        this.connector.updateData('pedido/'+this.idPedido, dataDomi)
                .then(data => {
                    this.router.navigate(['/pedidos/listar']);
                });
    }

}
