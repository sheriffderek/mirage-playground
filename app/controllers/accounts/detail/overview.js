import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  account: Ember.computed.alias('model'),
});