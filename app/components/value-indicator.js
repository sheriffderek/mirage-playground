import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  // Element
  tagName: 'li',
  classNames: ['area'],

  // Passed in
  thing: null,
  width: null,

  //
  state: Ember.computed.alias('thing.value'),
  exceptional: Ember.computed.gte('state', 90),
  good: Ember.computed.gte('state', 60),
  mediocre: Ember.computed.lt('state', 60),
  unacceptable: Ember.computed.lt('state', 30),

  // Style
  classNameBindings: ['exceptional', 'good', 'mediocre', 'unacceptable'],
  attributeBindings: ['style'],

  style: Ember.computed('state', function() {
    return Ember.String.htmlSafe(`height: ${this.get('state')}%; width: ${this.get('width')}%;`);
  }),

  click() {
    // alert('hi');
    let input = prompt('Input a value between 0 and 100.');
    this.set('state', input);
  },

  actions: {

  },

});
