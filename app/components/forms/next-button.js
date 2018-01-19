import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  // Element
  tagName: 'button',
  classNames: ['button'],

  // Injected
  router: service(),

  // Passed in
  destination: null,

  // Properties
  label: 'Next', // default

  // actions   
  click() {
    this.get('router').transitionTo( this.get('destination') );
  },
});
