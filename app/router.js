import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index');
  this.route('accounts', function() {
    // this.route('index'); // this is implicit (but that is confusing...)
    this.route('create');
    this.route('detail');
  });
  this.route('orders');
  this.route('products');
});

export default Router;
