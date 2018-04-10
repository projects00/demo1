import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http: Http) { }


   public baseApi = 'http://localhost:57261/api/values';

  public getValues() {
    debugger;
    return this.http.get(this.baseApi).map(response => {
      debugger
      console.log(response.json());
      return response.json()
    }

    );
  }

}
