import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  number(index) {
    return `00${index}`;
  },
  dateOrdered() {
    return new Date();
  },
  statusCode: 0,
});
