import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  // Element
  tagName: 'h1',

  // Options
  compression: 1,
  min: '16px',
  max: '300px',

  didInsertElement() {
    $( this.$() ).fitText(this.get('compression'), {
      minFontSize: this.get('min'),
      maxFontSize: this.get('max'),
    });
  },

  willDestroyElement() {
    //
  },

});
