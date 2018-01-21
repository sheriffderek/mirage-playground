import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  officialAccounts: Ember.computed.filterBy('model', 'isNew', false),

  thisSort: ['lastName:asc'], // $questions
  sortedByLastName: Ember.computed.sort('officialAccounts', 'thisSort'),

});
