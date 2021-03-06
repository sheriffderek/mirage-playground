import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  orders: DS.hasMany(),
  subscriptions: DS.hasMany(),
  paymentMethods: DS.hasMany(),

  firstName: DS.attr('string'),
  lastName: DS.attr('string'),


  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  slug: Ember.computed('fullName', function() {
    return this.get('fullName').dasherize();
  }),

  email: DS.attr('string'),

  handle: DS.attr('string' /*, {defaultValue: this.get('email')} */), // $question

  add() {
    return this.save(); // return so we can work off of the promise in the route
  },

  update() {
    return this.save();
  },

  remove(account) { // this is where I want to deal with the 'account'
    Ember.Logger.log(`remove() in 'account' account`);
    const userConfirmed = confirm(`Are you sure you want to delete the ${account.data.name} record?`);
    if (userConfirmed) {
      return this.destroyRecord(); // talk about delete record here...
    }
    return; // $question - .then is not a function if not confirmed / explain
  },

  addPaymentMethod() {
    alert('add payment method...');
  },

});
