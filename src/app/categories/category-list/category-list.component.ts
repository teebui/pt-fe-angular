import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'app-category-list',
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Categories
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div *ngIf="categories">
          <div *ngFor="let cat of categories">
            <div class="container">
              <h2 class="title">{{ cat.name }} ({{ cat.cat_id }})</h2>
              <h3 class="subtitle">
              {{ cat.desc }}
              </h3>
            </div>
          </div>
      </div>
  </section>
  `,
  styles: [
  ]
})
export class CategoryListComponent implements OnInit {
  categories

  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.catService.getCategories()
  }
}
