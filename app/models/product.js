import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  type: DS.attr(),
  price: DS.attr(),

  order: DS.belongsTo(),
});
