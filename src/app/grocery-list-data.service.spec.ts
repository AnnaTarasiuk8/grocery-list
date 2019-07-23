import {TestBed, async, inject} from '@angular/core/testing';
import {List} from './list';
import {GroceryListService} from './grocery-list-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryListService]
    });
  });

  it('should ...', inject([GroceryListService], (service: GroceryListService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllProducts()', () => {

    it('should return an empty array by default', inject([GroceryListService], (service: GroceryListService) => {
      expect(service.getAllProdcuts()).toEqual([]);
    }));

    it('should return all procuts', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      const product2 = new List({product: 'Product 2', complete: true});
      service.addProduct(product1);
      service.addProduct(product2);
      expect(service.getAllProdcuts()).toEqual([product1, product2]);
    }));

  });

  describe('#save(product)', () => {

    it('should automatically assign an incrementing id', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      const product2 = new List({product: 'Product 2', complete: true});
      service.addProduct(product1);
      service.addProduct(product2);
      expect(service.getProductById(1)).toEqual(product1);
      expect(service.getProductById(2)).toEqual(product2);
    }));

  });

  describe('#deleteProductById(id)', () => {

    it('should remove product with the corresponding id', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      const product2 = new List({product: 'Product 2', complete: true});
      service.addProduct(product1);
      service.addProduct(product2);
      expect(service.getAllProdcuts()).toEqual([product1, product2]);
      service.deleteProductById(1);
      expect(service.getAllProdcuts()).toEqual([product2]);
      service.deleteProductById(2);
      expect(service.getAllProdcuts()).toEqual([]);
    }));

    it('should not removing anything if product with is not found', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      const product2 = new List({product: 'Product 2', complete: true});
      service.addProduct(product1);
      service.addProduct(product2);
      expect(service.getAllProdcuts()).toEqual([product1, product2]);
      service.deleteProductById(3);
      expect(service.getAllProdcuts()).toEqual([product1, product2]);
    }));

  });

  describe('#updateProductById(id, values)', () => {

    it('should return product with the corresponding id and updated data', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      service.addProduct(product1);
      const updatedProduct = service.updateProductById(1, {
        product: 'new title'
      });
      expect(updatedProduct.product).toEqual('new title');
    }));

    it('should return null if product is not found', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      service.addProduct(product1);
      const updatedProduct = service.updateProductById(2, {
        product: 'new title'
      });
      expect(updatedProduct).toEqual(null);
    }));

  });

  describe('#toggleListComplete(product)', () => {

    it('should return the updated product with inverse complete status', inject([GroceryListService], (service: GroceryListService) => {
      const product1 = new List({product: 'Product 1', complete: false});
      service.addProduct(product1);
      const updatedProduct = service.toggleListComplete(product1);
      expect(updatedProduct.complete).toEqual(true);
      service.toggleListComplete(product1);
      expect(updatedProduct.complete).toEqual(false);
    }));

  });
});
