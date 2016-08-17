import { Component } from '@angular/core';
import { Notes } from './notes';
import { AppBar } from '../ui';

@Component({
  selector: 'main-container',
  directives: [AppBar, Notes],
  template: `
    <div>
      <app-bar></app-bar>
      <main class="main">
        <notes-container></notes-container>
      </main>
    </div>
  `
})
export class Main {}