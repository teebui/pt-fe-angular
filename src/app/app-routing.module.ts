import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { AuthGuard } from './core/helpers/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'categories',
    loadChildren: () => CategoriesModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'items',
    loadChildren: () => ItemsModule,
    canActivate: [AuthGuard]
  },
  { 
    path: '**',
    redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
