import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ItemListComponent, ItemCreateComponent, ItemViewComponent, ItemUpdateComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule
  ]
})
export class ItemsModule { }
