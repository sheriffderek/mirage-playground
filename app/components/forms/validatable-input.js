import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  // Element
  tagName: 'label',
  classNames: ['validated-input'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],

  //
  model: null,
  value: null,

  type: 'text',
  valuePath: '', // $question
  placeholder: '',
  validation: null,
  showValidations: false,
  didValidate: false,

  //
  notValidating: Ember.computed.not('validation.isValidating').readOnly(),
  hasContent: Ember.computed.notEmpty('value').readOnly(),
  hasWarnings: Ember.computed.notEmpty('validation.warnings').readOnly(),
  isValid: Ember.computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
  shouldDisplayValidations: Ember.computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

  //
  showErrorClass: Ember.computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),
  showErrorMessage: Ember.computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),
  showWarningMessage: Ember.computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),

  init() {
    this._super(...arguments);
    let valuePath = this.get('valuePath');

    Ember.defineProperty(this, 'validation', Ember.computed.readOnly(`model.validations.attrs.${valuePath}`));
    Ember.defineProperty(this, 'value', Ember.computed.alias(`model.${valuePath}`));
  },

  focusOut() {
    this._super(...arguments);
    this.set('showValidations', true);
  }
});