import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  order: Ember.computed.alias('model'),

  officialOrders: Ember.computed.filterBy('order', 'isNew', false),

  sortByDate: ['date:desc'],
  ordersByDate: Ember.computed.sort('officialOrders', 'sortByDate'),

});
