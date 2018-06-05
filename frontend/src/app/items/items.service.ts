import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  headers = null;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getItems(list_id) {
    return this.http.get("http://localhost:3000/list/" + list_id, {headers: this.headers});
  }

  public findItem(id) {
    return this.http.get("http://localhost:3000/item/" + id, {headers: this.headers});
  }

}
