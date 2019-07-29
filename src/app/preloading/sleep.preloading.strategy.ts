import { Route } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class SleepPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
        debugger;
        return Observable.of(true).delay(5000).flatMap((_: boolean) => fn());
    }
}