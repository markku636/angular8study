import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/definitions/model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoListService: TodoService) { }

  ngOnInit() {
    this.todoListService.loadTodoList();
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }

}
