import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesModule } from './categories/categories.module';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => CategoriesModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
