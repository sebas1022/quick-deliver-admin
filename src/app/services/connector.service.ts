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
        return new Promise(resolve => {
            this.http.get(`${this.uri}/${mod}`).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    updateData(mod, data) {
        return new Promise((resolve, reject) => {
            this.http.put(`${this.uri}/${mod}`, data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
