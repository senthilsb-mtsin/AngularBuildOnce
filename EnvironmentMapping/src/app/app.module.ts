import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnvironmentMappingConfigService } from './services/environment-mapping.service';
import { EnvironmentMappingModel } from './models/environment-mapping.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function initializerFn(environmentMappingConfig: EnvironmentMappingConfigService) {
  return () => {
    return environmentMappingConfig.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    {
      provide: EnvironmentMappingModel,
      deps: [HttpClient],
      useExisting: EnvironmentMappingConfigService
    },
    {
      provide: APP_INITIALIZER,
      deps: [EnvironmentMappingConfigService],
      multi: true,
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
