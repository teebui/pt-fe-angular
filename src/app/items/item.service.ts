import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ItemService {
  private url: string = 'https://localhost:5001/api'

  constructor(private http: HttpClient) { }

  getItemsByCategory(catId: number): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.url}/categories/${catId}/items`)
  }
}