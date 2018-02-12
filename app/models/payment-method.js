import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  account: DS.belongsTo(),
  lastFour: DS.attr(),
  expirationMonth: DS.attr(),
  expirationYear: DS.attr(),
});
