import Ember from 'ember';
import KeyboardOptionsMixin from '../../../mixins/keyboard-options';
import { module, test } from 'qunit';

module('Unit | Mixin | keyboard options');

// Replace this with your real tests.
test('it works', function(assert) {
  let KeyboardOptionsObject = Ember.Object.extend(KeyboardOptionsMixin);
  let subject = KeyboardOptionsObject.create();
  assert.ok(subject);
});
