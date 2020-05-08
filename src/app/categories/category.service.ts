import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs' 
import { ICategory, ICategoryWithItems } from './category';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CategoryService {

  url = 'https://localhost:5001/api'

  constructor(private http: HttpClient) { }

  // get categories
  // getCategories(): Observable<ICategory[]>{
  getCategories(): Observable<ICategory[]> {
    return this.http
      .get<ICategory[]>(`${this.url}/categories`)
    // return this.http
    //   .get<IServerCategory[]>(`${this.url}/categories`)
    //   .pipe(map(o => o.map((cat): ICategory => ({
    //       id: cat.CategoryId,
    //       name: cat.Name,
    //       description: cat.Description,
    //       itemsCount: cat.ItemsCount
    //   })))
    // );
  }

  getCategory(catId: number): Observable<ICategoryWithItems> {
    // return { cat_id: 1, name: "Hello world", desc: "just a name" }
    return this.http.get<ICategoryWithItems>(`${this.url}/categories/${catId}/items`)
  }

}
