import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ActorFormComponentComponent } from './actor-form-component/actor-form-component.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //imports: [FormsModule],
  //declarations: [ActorFormComponentComponent],
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(
      FormsModule)
  ],  
    
};
