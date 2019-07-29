import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertModel } from '../definitions/model';

@Injectable()
export class SharedService {
    private token: string = "default token";
        
    constructor() {


    }


    setToken(token: string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }
}