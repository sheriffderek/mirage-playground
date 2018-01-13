import Component from '@ember/component';
import Ember from 'ember';
import $ from 'jquery';
// const { $, run, computed } = Ember;

export default Ember.Component.extend({
  tagName: 'header',
  classNames:['page-section', 'site-header'],
  classNameBindings: ['scrolled'],

  scrolled: false,
  triggerPosition: 100, // px

  didInsertElement() {
    this._super(...arguments);
    this._windowScroll = Ember.run.bind(this, 'onWindowScroll');
    $(window).on('scroll', this._windowScroll);
    // this.set('triggerPosition', this.$().offset().top);
  },

  onWindowScroll(event) {
    let scrollPosition = $(event.currentTarget).scrollTop();
    let triggerPosition = this.get('triggerPosition');
    if (scrollPosition > triggerPosition) {
      this.set('scrolled', true);
    } else {
      this.set('scrolled', false);
    }
  },

  willRemoveElement() {
    $(window).off('scroll', this._windowScroll);
    this._super(...arguments);
  },
});
