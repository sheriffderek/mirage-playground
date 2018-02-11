import { test } from 'qunit';
import moduleForAcceptance from 'mirage-outline/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create account');

test('visiting /accounts/create', function(assert) {
  visit('/accounts/create');

  andThen(function() {
    assert.equal(currentURL(), '/accounts/create');
  });
});

test('creating an account', function(assert) {
  visit('/accounts/create');

  // check records

  fillIn("[data-test-first-name]", 'Derek');
  fillIn("[data-test-last-name]", 'Wood');

  click('[data-test-create-button]');

  // compare records + get ID to check page transition?

  andThen(function() {
    // transitions to account overview page
    assert.equal(currentURL(), '/accounts/1');
  });
});

test('only creates account with all fields', function(assert) {
  visit('/accounts/create');

  // check records

  fillIn("[data-test-first-name]", 'Derek');
  fillIn("[data-test-last-name]", '');

  click('[data-test-create-button]');

  // compare records + get ID to check page transition?

  andThen(function() {
    // transitions to account overview page
    assert.equal(currentURL(), '/accounts/create');
  });
});
