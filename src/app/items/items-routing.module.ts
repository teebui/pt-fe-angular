import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemCreateComponent } from './item-create/item-create.component';

var routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: ':item-id',
    component: ItemViewComponent
  },
  {
    path: ':item-id/update',
    component: ItemUpdateComponent
  },
  {
    path: 'create',
    component: ItemCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ItemsRoutingModule { }
