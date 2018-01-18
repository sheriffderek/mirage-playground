import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  // model: <= model()

  areas: Ember.computed.alias('model'),

  areaWidth: Ember.computed('areas', function() {
    return 100 / this.get('areas.length');
  }),

  actions: {
    setAreaValue(area) {
      area.setValue();
    },
  },

});
