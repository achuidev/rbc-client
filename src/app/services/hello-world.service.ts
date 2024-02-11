import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONTEXT_ROOT } from '../utils/app.constants';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor(private http: HttpClient) {}

  greetUser() {
    return this.http.get(`${CONTEXT_ROOT}/greet`);
  }
}
