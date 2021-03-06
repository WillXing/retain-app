import { Component } from '@angular/core';
import { Notes } from './notes';
import { AppBar } from '../ui';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'main-container',
  directives: [
    AppBar,
    Notes,
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <div>
      <app-bar></app-bar>
      <main class="main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class Main {}