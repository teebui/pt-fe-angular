import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CategoryService {

  url = 'http://jsonplaceholder.typicode.com/albums'

  constructor(private http: HttpClient) { }

  // get categories
  getCategories() {
    // return [
    //   { cat_id: 1, name: "Hello world", desc: "just a name" },
    //   { cat_id: 2, name: "Another category", desc: "just another name" }
    // ]
    return this.http.get(`${this.url}`)
  }

  getCategory(catId: string) {
    // return { cat_id: 1, name: "Hello world", desc: "just a name" }
    return this.http.get(`${this.url}/${catId}`)
  }

}
