import { NgxDymoService } from './ngx-dymo.service';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

interface DymoConfig {
  autoInitialize: boolean;
}

export function initApp(service: NgxDymoService) {
  return () => {
    return new Promise((resolve) => {
        service.init().then(() => {

          resolve('');
        })
    });
  };
}


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    NgxDymoService
  ],
  exports: []
})
export class NgxDymoModule {

  static forRoot(config: DymoConfig = { autoInitialize: true }): ModuleWithProviders<NgxDymoModule> {
    let providers =  []
    if (config.autoInitialize) {
      providers = [ {
        provide: APP_INITIALIZER,
        useFactory: initApp,
        deps:[NgxDymoService],
        multi: true,
      }, NgxDymoService
    ]
    }
    return {
      ngModule: NgxDymoModule,
      providers: providers
    }
  }
}
