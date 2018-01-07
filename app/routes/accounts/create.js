import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    // $question - this returns a 'record'
    return this.store.createRecord('account', {
      name: ``, // $question - likely related to the above... see dasherize error
      // if I don't use it in the template... it's fine - and I wouldn't actually use it in the template...
      // name doesn't exist yet... so the computed slug trying to access a non-existant property
      // $question - 
    });
  },

  actions: {
    createAccount(account) {
      account.save()
        .then( (post)=> {
          console.log(`"${post.data.name}" account was created.`); // $question - why 'data' here?
          this.transitionTo('accounts.detail');
        })
        .catch( (error)=> {
          console.log(`catch error: ${error.message}`);
        })
        .finally( ()=> {
          console.log(`createAccount(account) complete`);
        })
      ;
    },
  },

});
