import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    // $help - this returns a 'record' - but if you don't transition from that route... what would you do? This record is created whether or not it is saved... is that ok?
    return this.store.createRecord('account', {
      defaultPropertyFromRoute: 'property added during record creation', // $help - this isn't adding the property
      // $answer - this property needs to be defined on the model (and it wasn't)
    });
  },

  actions: {
    createAccount(account) {
      account.save()
        .then( (post)=> {
          console.log(`"${post.data.name}" account was created.`); // $help - why 'data' here?
          this.transitionTo('accounts');
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
