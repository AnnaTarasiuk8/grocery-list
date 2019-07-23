import {Injectable} from '@angular/core';
import {List} from './list';

@Injectable()
export class GroceryListService {
  lastId: number = 0;
  products: List[] = [];

  constructor() {
  }


  addProduct(product: List): GroceryListService {
    if (!product.id) {
      product.id = ++this.lastId;
    }
    this.products.push(product);
    return this;
  }


  deleteProductById(id: number): GroceryListService {
    this.products = this.products
      .filter(todo => todo.id !== id);
    return this;
  }


  updateProductById(id: number, values: Object = {}): List {
    const product = this.getProductById(id);
    if (!product) {
      return null;
    }
    Object.assign(product, values);
    return product;
  }


  getAllProdcuts(): List[] {
    return this.products;
  }


  getProductById(id: number): List {
    return this.products
      .filter(product => product.id === id)
      .pop();
  }


  toggleListComplete(product: List) {
    const updatedProduct = this.updateProductById(product.id, {
      complete: !product.complete
    });
    return updatedProduct;
  }

}
