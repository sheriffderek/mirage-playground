import Route from '@ember/routing/route';
import Ember from 'ember';

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



  // trying to check for field values // $questions about controller vs route
  allFieldsAddressed: Ember.computed.and('model.firstName', 'model.lastName'),

  actions: {
    createAccount(account) {

      account.add() // uses the function from the 'account' model... ( is add() too simple? )
        .then( (account)=> {
          Ember.Logger.info(`Account "${account.id}" created.`); // $question - discuss getting 'slug' or something here
          // this.get('store').findRecord('account', account.id)
          //   .then( (thing)=> {
          //     console.log('name', thing);
          //   })
          // ;
          // data vs attributes vs _attributes
          this.transitionTo('accounts.detail', account); // send them to the page - with the model to set the id in the dymanic segment
        })
        .catch( (error)=> {
          Ember.Logger.error(`catch error: ${error.message}`);
        })
        .finally( ()=> {
          Ember.Logger.info(`createAccount(account) ran`);
        })
      ;
    },
  },

});
