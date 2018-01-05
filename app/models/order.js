import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  products: DS.hasMany('product'),
});
