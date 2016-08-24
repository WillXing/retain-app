import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";
export interface Note {
  color: string,
  title: string,
  value: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface State {
  notes: Note[]
}

const defaultState = {
  notes: []
}

const _store = new BehaviorSubject<State>(defaultState)

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable().distinctUntilChanged()

  setState(state: State) {
    this._store.next(state)
  }

  getState() {
    return this._store.value
  }

  purge() {
    this._store.next(defaultState)
  }
}