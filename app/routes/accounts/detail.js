import Route from '@ember/routing/route';

export default Route.extend({

  model(urlParameters) {
    return this.store.findRecord('account', urlParameters.id);
  },

  actions: {
    deleteAccount(account) {
      account.remove(account)
        .then( ()=> { // $question -
          console.log('then...');
          this.transitionTo('accounts.list');
        })
        .catch( ()=> {
          console.log('catch......');
        })
        .finally( ()=> {
          console.log('finally...');
        })
      ;
    },
  },
});
