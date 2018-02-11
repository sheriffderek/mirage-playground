import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  account: belongsTo(),
  subscriptions: hasMany('subscription'),
});
