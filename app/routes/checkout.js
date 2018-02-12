import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from "rsvp"

export default Route.extend({

  session: service(),

  model() {
    return RSVP.hash({
      order: this.get('store').createRecord('order', {
        date: new Date(), // for fun
        account: this.get('session.currentUser'),
      }),
      products: this.get('store').findAll('product'),
    });
  },
});
