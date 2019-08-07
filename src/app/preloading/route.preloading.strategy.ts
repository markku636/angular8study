import { Route } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class RoutePreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        
        return route.data && route.data.preload ? load() : Observable.of(null);
    }
}