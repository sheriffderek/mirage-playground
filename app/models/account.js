import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string', /*{defaultValue: ''}*/),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  orders: DS.hasMany('order'),

  remove() { // this is where I want to deal with the 'account'
    console.log(`deleteAccount() in 'account' model`);
  },
});
