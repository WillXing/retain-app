import { Component } from '@angular/core'
import { NoteCard } from '../ui'

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
    NoteCard
  ],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        note creator here
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
          >
          </note-card>
          <note-card></note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes{
  notes = [
    { title: 'new note', value: 'note here', color: '#F00FF0'},
    { title: 'new note', value: 'note here', color: '#F00FF0'}
  ]
}