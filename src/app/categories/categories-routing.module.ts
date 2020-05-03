import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySingleComponent } from './category-single/category-single.component';

var routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: ':cat_id',
    component: CategorySingleComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }
