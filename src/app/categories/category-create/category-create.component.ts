import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { IBaseCategory } from '../category';

@Component({
  selector: 'app-category-create',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Add new category</h1>
      </div>
    </div>
  </section>

  <section class="section">
      <div class="container">  
    
      <form #createCategoryForm="ngForm" (ngSubmit)="submitForm()">
        <div class="field">
          <label class="label">Name</label>
          <input 
            type="text"
            name="name"
            class="input"
            [(ngModel)]="categoryName"
            #nameInput="ngModel"
            required />
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Category name is required!
            </div>
        </div>
        
        <div class="field">
          <label class="label">Description</label>
          <textarea name="description" class="textarea" [(ngModel)]="description"></textarea>
        </div>

        <button
          type="submit"
          class="button is-large is-warning"
          [disabled]="createCategoryForm.invalid">
          Create
        </button>
      </form>
      </div>
    </section>  

  `,
  styles: [
  ]
})
export class CategoryCreateComponent implements OnInit {
  category: IBaseCategory
  categoryName: string;
  description: string;

  constructor(private catService: CategoryService) { }

  ngOnInit(): void {
    // create API call
    // create the form based on API fields
  }

  submitForm() {
    
    let cat: IBaseCategory = {
      name: this.categoryName,
      description: this.description
    }

    this.catService.createCategory(cat).subscribe(data => {
      this.category = data;
      console.log(this.category);
    });

  }

}
