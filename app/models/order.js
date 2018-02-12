import DS from 'ember-data';
// you can pull in objects out of other objects with destructuring...
// import { hasMany, belongsTo } from 'ember-data/relationships';
// BUT... that doesn't seem to be much or a short-cut...
// explain...
import Ember from 'ember';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  emailAddress: [
    validator('presence', {
      presence: true,
      message: 'gotta put something here'
    }),
    validator('format', {
      type: 'email',
      message: `That's not an email...`,
    }),
  ],
  shippingFirstName: [
    validator('presence', true),
    validator('length', {
      min: 2,
    }),
  ],
  shippingLastName: [
    validator('presence', true),
    validator('length', {
      min: 4,
    }),
  ],
});

export default DS.Model.extend( Validations, {

  account: DS.belongsTo(),

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

  emailAddress: DS.attr(), // these should really just be on the account
  shippingFirstName: DS.attr(),
  shippingLastName: DS.attr(),

  cardExpirationMonth: DS.attr(),
  cardExpirationYear: DS.attr(),

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
