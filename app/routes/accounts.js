import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('account'); // it's getting all of the 'account' records on it's way in that route... 
  },
});
