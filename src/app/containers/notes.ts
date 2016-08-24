import { Component } from '@angular/core'
import { NoteCard, NoteCreator } from '../ui'
import {NoteService} from "../services/notes"
import {Store} from "../store";

@Component({
  selector: 'notes-container',
  styles: [`
   .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  directives: [
    NoteCard,
    NoteCreator
  ],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator
            (createNote)="onNoteCreate($event)"
        ></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]= "note"
            (checked) = "onNoteChecked(note, i)"
            *ngFor = "let note of notes; let i = index"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes{
  notes = []

  constructor(
    private noteService: NoteService,
    private store: Store
  ) {
    this.store.changes.pluck('notes')
      .subscribe( (notes: any) => this.notes = notes)

    this.noteService.getNotes()
      .subscribe()
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
      .subscribe()
  }

  onNoteCreate(note) {
    this.noteService.createNote(note)
      .subscribe()
  }
}