import { Component } from '@angular/core';
import {List} from './list';
import {GroceryListService} from './grocery-list-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroceryListService]
})
export class AppComponent {
  newProduct: List = new List();

  constructor(private service: GroceryListService) {
  }

  addProduct() {
    this.service.addProduct(this.newProduct);
    this.newProduct = new List();
  }

  toggleListComplete(list) {
    this.service.toggleListComplete(list);
  }

  removeProduct(list) {
    this.service.deleteProductById(list.id);
  }

  get products() {
    return this.service.getAllProdcuts();
  }
}
