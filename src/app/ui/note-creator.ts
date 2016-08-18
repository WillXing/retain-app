import {Component, EventEmitter, Output} from '@angular/core'
import {ColorPicker} from "./color-picker";

@Component({
  selector: 'note-creator',
  directives: [
    ColorPicker
  ],
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  template: `
    <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf = fillForm
        >
        <input
          type="text"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
          (click)="toggle(true)"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf = fillForm>
          <div class="col-xs-3">
            <color-picker
              [colors] = "colors"
              (selected) = "selectColor($event)"
            ></color-picker>
          </div>
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter()

  newNote = {
    title: '',
    value: '',
    color: 'white'
  }

  fillForm:boolean = false

  colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white']

  onCreateNote() {
    const {title, value, color} = this.newNote

    if (title && value && color) {
      this.createNote.emit({title, value, color})
      this.reset()
      this.toggle(false)
    }
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    }
  }

  toggle(fillForm:boolean) {
    this.fillForm = fillForm
  }

  selectColor(color) {
    this.newNote.color = color
  }
}