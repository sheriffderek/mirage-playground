import DS from 'ember-data';

export default DS.Model.extend({
  // id --- should attach to the 'order' on which it was placed...
  type: DS.attr('string'),
  typeKey: DS.attr('string'),
  typeTitle: DS.attr('string'),
  account: DS.belongsTo('account'),
});
