import { Component, OnInit } from '@angular/core';
import { INewItem } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-create',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Add new item</h1>
      </div>
    </div>
  </section>

  <section class="section">
      <div class="container">  
    
      <form #createItemForm="ngForm" (ngSubmit)="submitForm()">
      
        <div class="field">
          <label class="label">Name</label>
          <input 
            type="text"
            name="name"
            class="input"
            [(ngModel)]="name"
            #nameInput="ngModel"
            required />
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Item name is required!
            </div>
        </div>


        <div class="field">
          <label class="label">Purchase price</label>
          <input 
            type="number"
            name="price"
            class="input"
            [(ngModel)]="price"
            #priceInput="ngModel" />

        </div>
        
        <div class="field">
          <label class="label">Description</label>
          <textarea name="description" class="textarea" [(ngModel)]="description"></textarea>
        </div>

        <button
          type="submit"
          class="button is-large is-warning"
          [disabled]="createItemForm.invalid">
          Create
        </button>
      </form>
      </div>
    </section> 
  `,
  styles: [
  ]
})

export class ItemCreateComponent implements OnInit {
  name: string
  description?: string
  price?: number
  purchaseDate: Date = new Date();
  categoryId: number = 1

  item: INewItem

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    let item: INewItem = {
      name: this.name,
      description: this.description,
      purchasePrice: this.price,
      purchaseDate: this.purchaseDate,
      categoryId: this.categoryId
    }

    this.itemService.createItem(item).subscribe(data => {
      this.item = data
      console.log(this.item)
    })
  }
  

}
