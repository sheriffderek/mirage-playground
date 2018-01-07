import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('account', {
      defaultPropertyFromRoute: 'from-route',
    });
  },

  actions: {
    createAccount(account) {
      account.save()
        .then( (account)=> {
          console.log(account.name + ' was created');
          this.transitionTo('accounts');
        })
      ;
    },
  },

});
