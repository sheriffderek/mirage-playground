import Component from '@ember/component';

export default Component.extend({

  // Element
  tagName: 'li',
  classNames: ['area'],

  // Passed in
  thing: null,
  width: null,

  //
  state: Ember.computed.alias('thing.value'),
  great: Ember.computed.gte('state', 90),
  good: Ember.computed.gte('state', 70),
  mediocre: Ember.computed.lt('state', 50),
  unacceptable: Ember.computed.lt('state', 35),

  // Style
  classNameBindings: ['great', 'good', 'mediocre', 'unacceptable'],
  attributeBindings: ['style'],

  style: Ember.computed('state', function() {
    return `height: ${this.get('state')}%; width: ${this.get('width')}%;`;
  }),

  click() {
    // alert('hi');
    let input = prompt('Input a value between 0 and 100.');
    this.set('state', input);
  },

  actions: {

  },

});
