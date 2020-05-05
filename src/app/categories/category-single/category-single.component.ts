import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ItemService } from 'src/app/items/item.service';

@Component({
  selector: 'app-category-single',
  template: `  
      <h1><strong>Category details: {{ category.title }}</strong></h1>
      <br />
      <div *ngIf="items">
        <div *ngFor="let item of items">
        {{ item.id }}: {{ item.title }}
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
    private itemService: ItemService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let catId = params['cat_id']

      // get category details
      this.catService
        .getCategory(catId)
        .subscribe(cat => this.category = cat)

      // get items from this category
      this.itemService
        .getItemByCategory(catId)
        .subscribe(items => this.items = items)
    })
  }
}
