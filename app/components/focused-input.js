import Component from '@ember/component';
// import $ from 'jquery'; // $question

export default Component.extend({
  // tagName: 'div',

  didInsertElement() {
    this.$('.focused').focus(); // $question - there must be a more elegant way.
  },
});
