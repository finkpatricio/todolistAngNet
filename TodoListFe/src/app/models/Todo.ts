import { Time } from '@angular/common';

export class Todo {
  constructor(
    public id?: number,
    public title?: string,
    public Timeleft?: Time
  ) {}
}
