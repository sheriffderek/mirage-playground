import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index');
  this.route('accounts', function() {
    // this.route('index'); // this is implicit (but that is confusing... 'list' is a better opion / and then you can set whatever you want the default to be as path: '/' - but index still has purpose)
    this.route('create', {path: '/'});
    this.route('detail', {path: '/:id'});
    this.route('list');
    // this.route('error'); // $question - wildcard for dynamic 404 vs error...
  });
  this.route('orders');
  this.route('products');
  this.route('wild-card', {path: '/*wildcard'});
});

export default Router;
