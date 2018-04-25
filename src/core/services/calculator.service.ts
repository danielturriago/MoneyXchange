import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public fetchChangeRate(): Observable<any> {

    return this.http.get('http://api.fixer.io/latest?base=USD&symbols=EUR');
      // .map(res => res.json());
  }

}
