import Component from '@ember/component';
import Ember from 'ember';
import $ from 'jquery';
// import { inject as service } from '@ember/service';

export default Ember.Component.extend({
  tagName: 'header',
  classNames:['page-section', 'site-header'],

  // resizeService: service('resize-service'), // injected into all components by default

  classNameBindings: ['scrolled'],

  largeScreen: false,

  scrolled: false,
  triggerPosition: 100, // px

  didInsertElement() {
    this._super(...arguments);
    this._windowScroll = Ember.run.bind(this, 'onWindowScroll');
    $(window).on('scroll', this._windowScroll);
    // this.set('triggerPosition', this.$().offset().top);
    this.get('resizeService').on('didResize', (/*event*/)=> {
      if (window.innerWidth > 600) {
        return this.set('largeScreen', true);
      }
      return this.set('largeScreen', false);
    }).trigger('didResize');
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
