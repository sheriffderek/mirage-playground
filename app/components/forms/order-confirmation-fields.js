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
      order.place()
        .then( function(response) {
          
          return this.get('router').transitionTo('thank-you');
          console.log('x', response);
        })
        .catch( function(response) {
          //
        })
        .finally( function() {
          //
        })
      ;
    },
  },
});
