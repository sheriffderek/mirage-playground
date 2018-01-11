import Service from '@ember/service';

export default Service.extend({

  currentUser: null,

  signIn(account) {
    this.set('currentUser', account)
  },

  signOut() {
    this.set('currentUser', null)
  },
});
