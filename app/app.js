import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});




Ember.Component.reopen({

  tagName: 'aside',
  classNames: ['component'],

  init() {

    this._super(...arguments);
    try {
      let arr = this.toString().match(/@component:.+?:/),
        className = arr[0].split(':')[1];

      // if it is nested it contains a '/'
      if (~className.lastIndexOf('/')) {
        className = className.substring(className.lastIndexOf('/') + 1, className.length);
      }
      let classNames = this.classNames.concat(className + '');
      Ember.set(this, 'classNames', classNames);
    } catch (err) {
      return;
    }
  }
});




loadInitializers(App, config.modulePrefix);

export default App;
