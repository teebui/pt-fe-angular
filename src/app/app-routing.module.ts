import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => CategoriesModule
  },
  {
    path: 'items',
    loadChildren: () => ItemsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
