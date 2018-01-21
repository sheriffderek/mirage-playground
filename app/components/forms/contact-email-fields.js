import Component from '@ember/component';
import $ from 'jquery';
export default Component.extend({

  // Element
  tagName: 'fieldset',

  didInsertElement() {
    $('input.start-here').first().focus();
  },
});
