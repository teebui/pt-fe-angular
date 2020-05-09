import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { IItem } from '../item';

@Component({
  selector: 'app-item-list',
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Items
          </h1>
        </div>
      </div>
    </section>

    <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Purchase date</th>
        <th>Purchase price</th>
        <th>Category</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Purchase date</th>
        <th>Purchase price</th>
        <th>Category</th>
      </tr>
    </tfoot>
    <tbody>
      <ng-container *ngIf="items">
      <ng-container *ngFor="let item of items">
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.purchaseDateTime }}</td>
        <td>{{ item.purchasePrice }}</td>
        <td><a routerLink="/categories/{{ item.category.id }}">{{ item.category.name }}</a></td>
      </tr>
      </ng-container>
      </ng-container>
    </tbody>
    </table>
  `,
  styles: [
  ]
})
export class ItemListComponent implements OnInit {

  items: IItem[]

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(data => this.items = data)
  }

}
