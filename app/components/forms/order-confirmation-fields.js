import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  // Element
  tagName: 'fieldset',

  // Injected
  router: service('router'),

  // Actions
  actions: {
    printOrder(order) {
      console.log('order: ', order);
    },
    saveOrder(order) {
      var betterNameHere = this;
      return order.save()
        .then( function(response) {
          betterNameHere.get('router').transitionTo('orders');
        })
      ;
    },
  },
});
