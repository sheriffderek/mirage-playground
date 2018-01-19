import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  officialOrders: Ember.computed.filterBy('model', 'isNew', false),

});
