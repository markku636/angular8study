import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../definitions/model';
import { HttpClient }          from '@angular/common/http';


@Pipe({
  name: 'todoDone',
  pure: true
})
export class TodoDonePipe implements PipeTransform {

  transform(todoItem: TodoItem, displayNotDone: boolean): any {
    // debugger
    if (todoItem.done) {
      return '(已完成)';
    } else if (displayNotDone) {
      return '(未完成)';
    }
    return '';
  }
}

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: HttpClient) { }

  transform(url: string): any {
debugger

    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      
      this.http.get(url).subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }
}