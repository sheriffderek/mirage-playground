import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  applicationName: `Tru Niagen | Mirage outline`,

  session: service('session'),

  actions: {
    accountSignOut() {
      this.get('session').signOut();
    },
  },
});
