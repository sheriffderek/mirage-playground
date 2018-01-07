import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  tagName: 'div',
  classNames: ['focused-input'],

  didInsertElement() {
    this.$('.focused').focus(); // $question - there must be a more elegant way.
  },
});
