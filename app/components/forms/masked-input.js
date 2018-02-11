import Component from '@ember/component';
// import Cleave from 'cleave';


export default Component.extend({

  // Element
  tagName: 'label',

  // Passed in
  value: null,
  model: null,

  rawData: null,
  cleavedValue: null,

  // Life cycle
  didInsertElement() {

    // for  08/2020  formatting
    var masked = new Cleave('.input', {
      blocks: [2, 2],
      delimiter: '/',
    });

    this.set('cleavedValue', masked);
  },

  // Functions
  divvyUpExpirationDate(value) {
    var month = value.slice(0,2);
    var year = value.slice(2,4);
    this.set('model.cardExpirationMonth', month);
    this.set('model.cardExpirationYear', year);
  },

  keyUp() {
    // this.divvyUpExpirationDate( this.get('cleavedValue').getRawValue() );
  },

  // Life cycle
  // this should clean up the 'cleave' js... right?

});
