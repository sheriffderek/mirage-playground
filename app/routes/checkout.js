import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  session: service(),

  model() {
    return this.get('store').createRecord('order', {
      date: new Date(), // for fun
      account: this.get('session.currentUser'),
    });
  },
});
