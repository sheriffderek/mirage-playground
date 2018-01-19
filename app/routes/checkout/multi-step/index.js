import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    this.replaceWith('checkout.multi-step.contact-email');
  },
});
