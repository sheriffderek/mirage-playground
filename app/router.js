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
    this.route('error', {path: '/*x'}); // $question - wildcard for dynamic 404 vs error...
  });
  this.route('orders', function() {
    this.route('list', {path: '/'});
    this.route('detail', {path: '/:id'}); // $question - this double :id (using it twice) can be a problem... how can I clearly demonstrate that?
    this.route('error', {path: '/*x'}); // $question - wildcard for dynamic 404 vs error...
  });
  this.route('products');

  this.route('surface-area');

  this.route('product-detail');

  this.route('checkout', function() {
    this.route('standard');
    this.route('multi-step', function() {
      this.route('contact-email');
      this.route('shipping-name');
      this.route('order-confirmation');
    });
    this.route('thank-you');
  });

  this.route('wild-card', {path: '/*wildcard'});
});

export default Router;
