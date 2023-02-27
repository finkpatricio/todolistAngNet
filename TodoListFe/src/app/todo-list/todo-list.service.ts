import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable()
export class TodoListService {
  private URL = 'http://localhost:5062';

  constructor(private http: HttpClient) {}

  crete(todo: Todo): Observable<Todo> {
    const copy = this.convert(todo);
    return this.http.post<Todo>(this.URL, copy);
  }

  private convert(todo: Todo): Todo {
    const copy: Todo = Object.assign({}, todo);
    return copy;
  }

  update(todo: Todo): Observable<Todo> {
    const copy: Todo = Object.assign({}, todo);
    return this.http.put<Todo>(`${this.URL}/${copy.id}`, copy);
  }

  find(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL}/${id}`);
  }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL);
  }
}
