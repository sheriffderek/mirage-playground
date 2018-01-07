import Route from '@ember/routing/route';

export default Route.extend({

  model(urlParameters) {
    return this.store.findRecord('account', urlParameters.id);
  },

  actions: {
    deleteAccount(account) {
      account.remove()
        .then( ()=> {
          this.transitionTo('accounts.list');
        })
      ;
    },
  },
});
