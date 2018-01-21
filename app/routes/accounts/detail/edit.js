import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    update(account) {
      account.update()
        .then( function(response) {
          // $question - route to detail page of this id/slug etc.
          // this.transitionTo('accounts.detail.overview', 'this id');
        })
      ;
    },
  },
});
