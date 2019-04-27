import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-domicilario',
    templateUrl: './domicilario.component.html',
    styleUrls: ['./domicilario.component.scss']
})
export class DomicilarioComponent implements OnInit {
    private accion: Params;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.accion = params['accion'];
            console.log(this.accion);
        });
    }
}
