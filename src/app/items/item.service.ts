import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem, INewItem } from './item';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ItemService {
  private url: string = 'https://localhost:5001/api'
  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  getItemsByCategory(catId: number): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.url}/categories/${catId}/items`)
  }

  createItem(item: INewItem): Observable<INewItem> {
    return this.http.post<INewItem>(`${this.url}/items`, item)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError))
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}