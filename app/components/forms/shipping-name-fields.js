import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  // Element
  tagName: 'fieldset',
  classNames: ['component', 'shipping-name-fields'],

  didInsertElement() {
    $('input.start-here').first().focus();
  },
});
