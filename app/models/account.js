import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  orders: DS.hasMany('order'),

  placeOrder() {
    console.log('placeOrder() from model');
  },
});
