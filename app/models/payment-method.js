import DS from 'ember-data';

export default DS.Model.extend({

  account: DS.belongsTo(),

  type: DS.attr('string'),
  nickname: DS.attr('string'),
  lastFour: DS.attr(),
  expirationMonth: DS.attr(),
  expirationYear: DS.attr(),

  edit() {
    // ?
  },

});
