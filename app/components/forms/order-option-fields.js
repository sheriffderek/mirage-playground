import Component from '@ember/component';

export default Component.extend({

  // Passed in
  order: null,
  products: null,

  actions: {
    selectProduct(product) {
      var products = this.get('order.products');
      products.pushObject(product);
      console.log('ooo', products);
    },
  },
});
