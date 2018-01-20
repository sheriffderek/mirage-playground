import DS from 'ember-data';
// you can pull in objects out of other objects with destructuring...
// import { hasMany, belongsTo } from 'ember-data/relationships';
// BUT... that doesn't see to be much or a short-cut...
// explain...
import Ember from 'ember';

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  products: DS.hasMany('product'),
  date: DS.attr('date'),

  statusCode: DS.attr('string', {defaultValue: 1}),
  statusMessage: Ember.computed('statusCode', function() { // $question - why doesn't this evaluate with the model defaultValue?
    const code = this.get('statusCode');
    if (code === 2) {
      return `Order refunded`;
    } else {
      return ``;
    }
  }),

  emailAddress: DS.attr(),
  shippingFirstName: DS.attr(),
  shippingLastName: DS.attr(),

  refunded: Ember.computed.equal('statusCode', 2),

  place() {
    return this.save();
  },

  refund() {
    alert(`Send PATCH request to update this order as 'refunded' + do the refunding`);
    return this.set('statusCode', 2);
  },

  resendInvoice() {
    alert('Invoice {invoice number} sent to {account email}');
  },
});
