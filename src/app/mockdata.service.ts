import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("http://jsonplaceholder.typicode.com/todos")
      .pipe(
        map(todoItems => {
          return todoItems.map(({ title, completed }) => {
            return { title: "- " + title, completed: completed }
          });
        }),
      );
  }


}
