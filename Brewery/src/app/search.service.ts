import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchService {

  private _word:string = '';
  private _wordSubject:BehaviorSubject<string> = new BehaviorSubject(this._word);
  public word:Observable<string> = this._wordSubject.asObservable();

  constructor() { }

  addToSearch(word:string) {
    this._word = word;

    this._wordSubject.next(this._word);
  }

}
