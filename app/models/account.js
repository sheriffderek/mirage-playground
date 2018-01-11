import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string', /*{defaultValue: ''}*/),

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  orders: DS.hasMany('order'),

  add() {
    return this.save(); // return so we can work off of the promise in the route
  },

  remove(account) { // this is where I want to deal with the 'account'
    console.log(`remove() in 'account' account`);
    const userConfirmed = confirm(`Are you sure you want to delete the ${account.data.name} record?`);
    if (userConfirmed) {
      return this.destroyRecord(); // talk about delete record here...
    }
    return; // $question - .then is not a function if not confirmed / explain
  },
});
