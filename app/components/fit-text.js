import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  compression: 1,
  minFontSize: '16px',
  maxFontSize: '120px',

  didInsertElement() {
    this.$().fitText(this.get('compression'), {
      minFontSize: this.get('minFontSize'),
      maxFontSize: this.get('maxFontSize'),
    });
  },
});
