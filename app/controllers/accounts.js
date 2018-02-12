import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Controller.extend({

  session: service(),

  loggedIn: Ember.computed.alias('session.currentUser'),
  // kinda faked admin scenario

});
