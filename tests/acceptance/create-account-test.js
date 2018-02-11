import { test } from 'qunit';
import moduleForAcceptance from 'mirage-outline/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create account');

test('visiting /accounts/create', function(assert) {
  visit('/accounts/create');

  andThen(function() {
    assert.equal(currentURL(), '/accounts/create');
  });
});
