import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  exampleComputedProperty: Ember.computed('name', 'slug', function() {
    return this.get('name') + " → " + this.get('slug');
  }),

  orders: DS.hasMany('order'),
});
