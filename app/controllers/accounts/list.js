import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({


  thisSort: ['lastName:asc'],
  sortedByLastName: Ember.computed.sort('model', 'thisSort'),

});
