import Route from '@ember/routing/route';

export default Route.extend({

  // store: injected into routes by default

  model() {
    return this.get('store').findAll('account', {
      include: 'orders',
    }); // it's getting all of the 'account' records on it's way in that route...
  },
});
