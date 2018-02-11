import DS from 'ember-data';

export default DS.Model.extend({

  value: DS.attr('number'), // 1-100 ?

  setValue() {
    let input = prompt('Input a value between 0 and 100.');
    this.set('value', input);
  },
});
