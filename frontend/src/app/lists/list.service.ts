import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  headers = null;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getLists() {
    return this.http.get("http://localhost:3000/list", {headers: this.headers});
  }

  public findList(id) {
    return this.http.get("http://localhost:3000/list/" + id, {headers: this.headers});
  }

}
