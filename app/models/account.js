import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string', /*{defaultValue: ''}*/),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  orders: DS.hasMany('order'),

  },
});
