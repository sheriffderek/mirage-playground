import Component from '@ember/component';
// import Cleave from 'cleave';


export default Component.extend({

  // Element
  tagName: 'label',
  classNames: ['masked-input'],

  // Passed in
  value: null,
  model: null,

  rawData: null,
  cleavedValue: null,

  // Life cycle
  didInsertElement() {

    // for  08/2020  formatting
    const masked = new Cleave('.input', {
      blocks: [2, 4],
      delimiter: '/',
    });

    this.set('cleavedValue', masked);
  },

  // Functions
  divvyUpExpirationDate(value) {
    let month = value.slice(0,2);
    let year = value.slice(2,6);
    this.set('model.cardExpirationMonth', month);
    this.set('model.cardExpirationYear', year);
  },

  keyUp() {
    this.divvyUpExpirationDate( this.get('cleavedValue').getRawValue() );
  },

  // Life cycle
  // this should clean up the 'cleave' js... right?

});
