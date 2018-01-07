import Route from '@ember/routing/route';

export default Route.extend({

  model(urlParameters) { // these come from the dynamic segments
    return this.store.peekRecord('account', urlParameters.id);
    // use the id to match up with the dynamic segment and find the correct record in the store
  },
});
