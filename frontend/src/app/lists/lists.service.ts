import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { List } from './list.model';

@Injectable()
export class ListsService {

  constructor(private http: HttpClient) {}

  public getLists(): Observable<List[]> {
    return this.http.get<List[]>('http://localhost:3000/list').pipe(
      tap(lists => this.log(`fetched lists`)),
      catchError(this.handleError('getLists', []))
    );
  }

  public findList(id): Observable<List> {
    return this.http.get<List>(`http://localhost:3000/list/${id}`).pipe(
      tap(_ => this.log(`fetched list id=${id}`)),
      catchError(this.handleError<List>(`getList id=${id}`))
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
