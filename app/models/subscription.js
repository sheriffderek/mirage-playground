import DS from 'ember-data';

export default DS.Model.extend({
  // id --- should attach to the 'order' on which it was placed...
  number: DS.attr(),
  type: DS.attr(),
  typeName: DS.attr(),
  typeKey: DS.attr('string'),
  typeTitle: DS.attr('string'),
  dateOrdered: DS.attr('date'),

  account: DS.belongsTo(),
});
