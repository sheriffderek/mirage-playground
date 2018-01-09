import DS from 'ember-data';
// you can pull in objects out of other objects with destructuring...
// import { hasMany, belongsTo } from 'ember-data/relationships';
// BUT... that doesn't see to be much or a short-cut...
// explain...

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  products: DS.hasMany('product'),
  date: DS.attr('date'),
});
