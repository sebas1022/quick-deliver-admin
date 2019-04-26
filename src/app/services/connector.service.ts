import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ConnectorService {
    uri = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getData(mod) {
        return this.http.get(`${this.uri}/${mod}`);
    }
}
