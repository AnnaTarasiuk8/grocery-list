import { List } from './list';

describe('List', () => {
  it('should create an instance', () => {
    expect(new List()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const list = new List({
      product: 'potato',
      complete: true
    });
    expect(list.product).toEqual('potato');
    expect(list.complete).toEqual(true);
  });
});
