import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../mockdata.service';
import { Todo } from '../model/todo';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css', '../app.component.css']
})
export class RequestComponent implements OnInit {

  public result: string = "";
  public todos: Observable<Todo[]>;
  constructor(private service: MockdataService) { }

  ngOnInit() {
  }

  fetchData() {
    this.todos = this.service.getTodos();
  }

}
