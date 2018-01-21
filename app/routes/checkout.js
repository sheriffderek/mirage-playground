import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').createRecord('order', {
      date: new Date(), // for fun
    });
  },
});