import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Controller.extend({
  order: Ember.computed.alias('model.order'),
  products: Ember.computed.alias('model.products'),

  session: service(),

  loggedIn: Ember.computed.alias('session.currentUser'),

});