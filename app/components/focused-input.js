import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  didInsertElement() {
    this.$('.focused').focus(); // $question - there must be a more elegant way.
  },
});
