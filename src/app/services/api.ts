import {Http, Headers, Response} from '@angular/http'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
  api_url: string = 'http://localhost:3500'

  constructor(private http: Http) {}

  private getJson(response: Response) {
    return response.json()
  }

  private checkForError(response: Response): Response{
    if(response.status >= 200 && response.status < 300) {
      return response
    }else {
      var error = new Error(response.statusText)
      error['response'] = response
      throw error
    }
  }

  get(path: string) {
    return this.http.get(`${this.api_url}{path}`, {headers: this.headers})
      .map(this.checkForError)
      .catch( err => {
        Observable.throw(err);
      })
      .map(this.getJson)
  }
}