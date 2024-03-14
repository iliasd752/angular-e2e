import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from "@angular/router";

import { routes } from "./app/app.routes";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

importProvidersFrom(HttpClientModule)
  provideRouter(routes,
    withPreloading(PreloadAllModules),
    withDebugTracing(),
  )
