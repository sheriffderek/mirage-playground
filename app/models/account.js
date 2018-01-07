import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string', /*{defaultValue: ''}*/),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  defaultPropertyFromModel: DS.attr('string', {
    defaultValue: 'property added during model creation',
  }),

  defaultPropertyFromRoute: DS.attr('string'),

  orders: DS.hasMany('order'),

  placeOrder() {
    console.log('placeOrder() from model');
  },
});
