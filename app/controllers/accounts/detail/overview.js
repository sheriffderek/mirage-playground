import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  account: Ember.computed.alias('model'),

  actions: {

    addPaymentMethod() {
      // alert('addPaymentMethod()');
      // Should take you to a route - or bring in an elsewhere modal or something
      var newPaymentMethod = this.get('store').createRecord('payment-method', {
        type: 'amex',
        // how does ID creation work here? Does it need to be saved?
      });
      var paymentMethods = this.get('account.paymentMethods');
      newPaymentMethod.save().then( (method)=> {
        paymentMethods.pushObject(method);
        // should I .then here - or is it not nessesary
      });
    },

    setAsDefaultPaymentMethod(method) {
      alert(`setAsDefaultPaymentMethod() on method id ${method.id}`);
      // likely needs to be a component
    },

    editPaymentMethod(method) {
      alert(`editPaymentMethod() ${method.id}`);
      // could use the same UI as addPaymentMethod
    },

    deletePaymentMethod(method) {
      alert(`deletePaymentMethod() ${method.id}`);
    },
  },
});
