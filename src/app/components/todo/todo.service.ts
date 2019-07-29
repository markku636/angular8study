import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/definitions/model';
import { DataService } from 'src/app/commons/data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  todoItems: TodoItem[] = [];

  constructor(private dataService:DataService) { }

  loadTodoList() {

    var self = this;
    self.dataService.get("/my-test-data/todo-list.json" , function (result) {
      
      debugger
      result.forEach(item => {       
        self.todoItems.push({
          id: item.id,
          value: item.value,
          done: item.done
        });
      });      
    });
  }

  getTodoList() {
    return this.todoItems;
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
    // 給予一個新的物件參考
    this.todoItems = [...this.todoItems];
  }
}
