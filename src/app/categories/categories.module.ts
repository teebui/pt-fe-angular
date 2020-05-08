import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySingleComponent } from './category-single/category-single.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryListComponent, CategorySingleComponent, CategoryCreateComponent, CategoryUpdateComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
