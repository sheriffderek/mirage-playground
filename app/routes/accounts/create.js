import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    // $question - this returns a 'record'
    return this.store.createRecord('account', {
      name: ``, // $question - likely related to the above... see dasherize error
      // if I don't use it in the template... it's fine - and I wouldn't actually use it in the template...
      // name doesn't exist yet... so the computed slug trying to access a non-existant property
      // $question - this creates an 'account' "instance"? every time you enter this route? That doesn't sound good....
    });
  },

  actions: {
    createAccount(account) {
      account.add()
        .then( (account)=> {
          console.log(`"${account.data.name}" account was created.`); // $question - why 'data' here?
          this.transitionTo('accounts.detail', account); // send them to the page - with the model to set the id in the dymanic segment
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
