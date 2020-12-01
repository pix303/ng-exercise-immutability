import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatAll, filter, map, mergeAll, tap, toArray } from 'rxjs/operators';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("http://jsonplaceholder.typicode.com/todos")
      .pipe(
        tap(items => console.log(items.length)),
        mergeAll(),
        filter(({ completed }) => completed == false),
        toArray()
      );
  }


}
