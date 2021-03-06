import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  tagName: 'ul',

  session: service('session'),

  actions: {
    accountSignIn(account) {
      this.get('session').signIn(account);
    },
  },
});
