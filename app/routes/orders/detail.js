import Route from '@ember/routing/route';

export default Route.extend({

  // store: injected into routes by default

  model(params) {
    return this.get('store').findRecord('order', params.id);
  },
});
