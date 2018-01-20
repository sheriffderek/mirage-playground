import Route from '@ember/routing/route';

export default Route.extend({

  // Injected
  store: null,
  // injected into routes by default

  model(params) {
    return this.get('store').findRecord('order', params.id);
  },

  actions: {
    refundOrder(order) {
      order.refund(); // again... using the function on the model
    },

    resendInvoice(order) {
      order.resendInvoice();
    },
  },

});
