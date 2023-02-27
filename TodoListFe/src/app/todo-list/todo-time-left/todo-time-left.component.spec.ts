import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTimeLeftComponent } from './todo-time-left.component';

describe('TodoTimeLeftComponent', () => {
  let component: TodoTimeLeftComponent;
  let fixture: ComponentFixture<TodoTimeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTimeLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTimeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
