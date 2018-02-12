import Controller from '@ember/controller';

export default Controller.extend({
  order: Ember.computed.alias('model.order'),
  products: Ember.computed.alias('model.products'),
});
