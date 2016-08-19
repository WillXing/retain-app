import { bootstrap } from '@angular/platform-browser-dynamic'
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import {App, providers} from './app'
import {HTTP_PROVIDERS} from "@angular/http";
import {provideRouter} from "@angular/router";
import {routes} from "./app/routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";



bootstrap(App, [
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(routes),
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  ...providers
])