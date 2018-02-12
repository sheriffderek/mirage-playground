import Component from '@ember/component';

export default Component.extend({

  // Passed in
  product: null,

  //
  active: null,

  //
  click() {
    this.get('select')(this.get('product'));
  },

});
