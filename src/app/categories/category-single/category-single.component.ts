import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ItemService } from 'src/app/items/item.service';

@Component({
  selector: 'app-category-single',
  template: `  
      <h1><strong>Category details: {{ category.name }}</strong></h1>
      <br />
      <div *ngIf="items">
        <div *ngFor="let item of items">
        <h2><strong>{{ item.id }}: {{ item.name }}</strong></h2>
        <h4>{{ item.description }}</h4>
        <br />
        </div>
      </div>
  
  `,
  styles: [
  ]
})
export class CategorySingleComponent implements OnInit {
  category
  items

  constructor(
    private catService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let catId: number = params['cat_id']

      // get category details
      this.catService
        .getCategory(catId)
        .subscribe(cat => {
          this.category = cat
          this.items = cat.items
        })
    })
  }
}
