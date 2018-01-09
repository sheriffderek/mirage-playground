import Component from '@ember/component';

export default Component.extend({
  tagName: 'aside',
  classNames: ['order-row'],

  actions: {
    refundOrder(order) {
      order.refund(); // again... using the function on the model
    },

    resendInvoice(order) {
      order.resendInvoice();
    },
  },
});
