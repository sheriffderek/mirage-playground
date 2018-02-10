import Controller from '@ember/controller';

export default Controller.extend({

  account: Ember.computed.alias('model'),

});
