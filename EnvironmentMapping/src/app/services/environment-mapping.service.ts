import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentMappingModel } from '../models/environment-mapping.model';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentMappingConfigService extends EnvironmentMappingModel {

    constructor(private http: HttpClient) {
        super();
    }

    load() {
        return this.http.get('assets/environment-config.json')
            .toPromise()
            .then((data: { host: string, apiURL: string }[]) => {
                this.Environments = data;
            });
    }
}
