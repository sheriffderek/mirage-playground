import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import $ from 'jquery';

export default Component.extend({

  // Element
  tagName: 'fieldset',

  // Injected
  router: service('router'),

  didInsertElement() {
    $('.start-here').first().focus();
  },

  // Actions
  actions: {
    printOrder(order) {
      Ember.Logger.log('order: ', order);
    },
    saveOrder(order) {
      return order.save()
        .then( (/*response*/)=> {
          this.get('router').transitionTo('orders');
        })
      ;
    },
  },
});
