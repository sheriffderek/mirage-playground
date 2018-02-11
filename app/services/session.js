import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

  cookies: service('cookies'),
  store: service(), // don't need to keep the name if the same as the attribute

  currentUser: null,

  init() {
    this._super(...arguments); // 'gather' operator ('rest operator')
    const currentUserId = this.get('cookies').read('currentUserId');
    if (currentUserId) {
      this.get('store').findRecord('account', currentUserId)
        .then( (account)=> {
          this.set('currentUser', account);
        })
      ;
    }
  },

  signIn(account) {
    this.set('currentUser', account)
    this.get('cookies').write('currentUserId', account.id);
  },

  signOut() {
    this.set('currentUser', null);
    this.get('cookies').write('currentUserId', null); // $question - seems redundent
  },
});
