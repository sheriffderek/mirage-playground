import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  number(index) {
    return `00${index}`;
  },
  name(index) {
    return `Order #00${index}`;
  },
  date() {
    return new Date();
  },
});
