import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-single',
  template: `
    <p>
      Category details: {{ category.title }}
    </p>
  `,
  styles: [
  ]
})
export class CategorySingleComponent implements OnInit {
  category

  constructor(
    private catService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.catService
        .getCategory(params['cat_id'])
        .subscribe(cat => this.category = cat)
    })
  }
}
