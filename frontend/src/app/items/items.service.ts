import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}),
  params: {}
};

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) {}

  public getItems(list_id = null): Observable<Item[]> {
    httpOptions.params = { list_id: list_id };
    return this.http.get<Item[]>('http://localhost:3000/item', httpOptions);
  }

  public findItem(id): Observable<Item> {
    return this.http.get<Item>(`http://localhost:3000/item/${id}`);
  }

  public saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:3000/item/', item, httpOptions).pipe(
      tap(_ => this.log(`saved item w/ id=${item.id}`)),
      catchError(this.handleError<Item>('saveItem'))
    );
  }

  public deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    return this.http.delete<Item>(`http://localhost:3000/item/${id}`, httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  public searchItem(term: string): Observable<Item[]> {
    if (!term.trim()) { return of([]); }
    httpOptions.params = { term: term };
    return this.http.get<Item[]>(`http://localhost:3000/item`, httpOptions).pipe(
      tap(_ => this.log(`found items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItem', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ItemsService: ' + message);
  }

}
