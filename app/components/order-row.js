import Component from '@ember/component';

export default Component.extend({

  actions: {
    refundOrder(order) {
      order.refund(); // again... using the function on the model
    },

    resendInvoice(order) {
      order.resendInvoice();
    },
  },
});
