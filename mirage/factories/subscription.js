import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  number(index) {
    return `00${index}`;
  },
  name(index) {
    return `Subscription #00${index}`;
  },
  date() {
    return new Date();
  },
});