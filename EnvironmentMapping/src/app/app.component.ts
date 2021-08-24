import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EnvironmentMappingModel } from './models/environment-mapping.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleconfigfile';
  APIResponse = '';
  constructor(private _environmentMapping: EnvironmentMappingModel, private _http: HttpClient) { 
    environment.apiURL = _environmentMapping.Environments.filter(x => x.host == window.location.hostname)[0].apiURL;
  }

  SendAPI() {
    var url = window.location.hostname;
    const userSchema = url.split('.');
    let env = userSchema.splice(0, 1)[0];
    this._http.get(environment.apiURL + 'values/' + env).subscribe(
      res => {
        this.APIResponse = res.toString();
      }
    )

  }

}
