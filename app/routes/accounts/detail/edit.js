import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    update(account) {
      account.update()
        .then( (account)=> {
          this.transitionTo('accounts.detail.overview', account.id);
        })
      ;
    },
  },
});
