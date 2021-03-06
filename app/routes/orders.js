import Route from '@ember/routing/route';

export default Route.extend({

  // store: injected into routes by default

  model() {
    return this.get('store').findAll('order', {
      include: 'account',
    });
  },

});
