import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ItemService {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getItemByCategory(categoryId: string) {
    return this.http.get(`${this.baseUrl}/albums/${categoryId}/photos`)
  }
}