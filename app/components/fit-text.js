import Component from '@ember/component';
import $ from 'jquery';
// should I use the original jQuery version?
// should I just paste this in here: https://github.com/adactio/FitText.js/blob/master/fittext.js
// is there a better 'ember' way?

export default Component.extend({

  // Element
  tagName: 'h1',

  // Options
  compression: 1,
  min: '16px',
  max: '300px',

  didInsertElement() {

  // Ember.run.schedule('afterRender', function() { ... })
  // Should I be using this ^ ?

    $( this.$() ).fitText(this.get('compression'), {
      minFontSize: this.get('min'),
      maxFontSize: this.get('max'),
    });
  },

  willDestroyElement() {
    // do I need to destroy the plugin?
  },

});
