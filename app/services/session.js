import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

  cookies: service('cookies'),

  signIn(account) {
    this.set('currentUser', account)
    this.get('cookies').write('currentUserId', account.id);
  },

  signOut() {
    this.set('currentUser', null);
    this.get('cookies').write('currentUserId', null);
  },
});
