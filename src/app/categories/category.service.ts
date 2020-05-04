import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CategoryService {

  constructor() { }

  // get categories
  getCategories() {
    return [
      { cat_id: 1, name: "Hello world", desc: "just a name" },
      { cat_id: 2, name: "Another category", desc: "just another name" }
    ]
  }

  getCategory() {
    return { cat_id: 1, name: "Hello world", desc: "just a name" }
  }

}
