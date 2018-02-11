import Route from '@ember/routing/route';

export default Route.extend({

  // store: injected into routes by default

  model(urlParameters) {
    return this.get('store').findRecord('account', urlParameters.id, {
      include: 'subscriptions, orders',
    });
  },

  actions: {
    deleteAccount(account) {
      account.remove(account)
        .then( ()=> { // $question -
          // console.log('then...');
          this.transitionTo('accounts.list');
        })
        .catch( ()=> {
          // console.log('catch......');
        })
        .finally( ()=> {
          // console.log('finally...');
        })
      ;
    },
  },
});
