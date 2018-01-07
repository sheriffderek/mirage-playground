import Route from '@ember/routing/route';

export default Route.extend({

  model(urlParameters) {
    return this.store.findRecord('account', urlParameters.id);
  },

  actions: {
    deleteAccount(account) { // takes in model...
      // uses function on the model to do model things
      account.remove(account);
    },
  },
});
