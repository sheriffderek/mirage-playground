import DS from 'ember-data';
// you can pull in objects out of other objects with destructuring...
// import { hasMany, belongsTo } from 'ember-data/relationships';
// BUT... that doesn't see to be much or a short-cut...
// explain...

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  products: DS.hasMany('product'),
  date: DS.attr('date'),

  statusCode: DS.attr('string'),
  statusMessage: Ember.computed('statusCode', function() {
    const code = this.get('statusCode');
    if (code === 2) {
      return `Order refunded`;
    } else {
      return ``;
    }
  }),

  refund() {
    // alert('Confirmation for refunding this order');
    return this.set('statusCode', 2);
  },

  resendInvoice() {
    alert('Invoice sent to {insert account email address}');
  },

  // refund: function() { // make a note of es2015 function syntax...

  // },
});
