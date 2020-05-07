import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
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
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: ':cat_id',
    component: CategorySingleComponent
  },
  {
    path: ':cat_id/update',
    component: CategoryUpdateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }
