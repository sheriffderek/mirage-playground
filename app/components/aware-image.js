import Component from '@ember/component';
import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Component.extend(InViewportMixin, ResizeAware, {

  // Element
  tagName: 'figure',
  classNames: ['image'],

  // Info
  title: null,
  alt: null,

  // Image options
  defaultSrc: `blank.png`,
  src: null,
  imageSrc: null,

  // State
  loaded: null,
  visible: null,
  animate: false,
  animated: false,

  // Sizes
  getMediumAt: null,
  getLargeAt: null,
  getExtraLargeAt: null,

  foresight: Ember.computed('animated', function() {
    if ( this.get('animate') ) {
      return 0;
    }
    return 4000;
  }),

  viewportOptionsOverride: Ember.on('didInsertElement', function() {
    Ember.setProperties(this, {
      viewportEnabled                 : true,
      viewportUseRAF                  : true,
      viewportSpy                     : false,
      viewportUseIntersectionObserver : true,
      viewportScrollSensitivity       : 1,
      viewportRefreshRate             : 150,
      intersectionThreshold           : 1.0,
      scrollableArea                  : null,
      viewportTolerance: {
        top    : this.get('foresight'),
        bottom : this.get('foresight'),
        left   : 0,
        right  : 0,
      },
    });
  }),

  didEnterViewport() {
    if (this.get('animate')) {
      this.set('animated', true);
    }
  },

  didExitViewport() {
    Ember.Logger.log('didExitViewport()')
  },

  contextSize: null,

  setSrc(windowWidth) {
    if (windowWidth > 900) {
      this.set('contextSize', "large");
    } else if (windowWidth > 600) {
      this.set('contextSize', "medium");
    } else {
      this.set('contextSize', "small");
    }
  },

  init() {
    this._super(...arguments);
    this.get('resizeService').on('didResize', (event)=> {
      this.setSrc(window.innerWidth); // this should happen in a service... just one place / not for every one of these components...
    }).trigger('didResize');
  },

  debouncedDidResize(width, height, evt) {
    Ember.Logger.log(`Debounced Resize! ${width}x${height}`);
  },



  click() {
    this.toggleProperty('animated');
  },

  classNameBindings: ['viewportEntered:visible', 'animated:animated'],

  //
  appropriateImageSrc: Ember.computed('src', 'contextSize', function() {
    var src = this.get('src');
    var halved = src.split('.');
    var firstHalf = halved[0];
    var secondHalf = halved[1];

    var contextSize = this.get('contextSize');

    if (contextSize === 'large') {
      return `${firstHalf}-large.${secondHalf}`;
    } else if (contextSize === 'medium') {
      return `${firstHalf}-medium.${secondHalf}`;
    }
    return src;
  }),
});
