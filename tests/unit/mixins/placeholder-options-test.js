import Ember from 'ember';
import PlaceholderOptionsMixin from '../../../mixins/placeholder-options';
import { module, test } from 'qunit';

module('Unit | Mixin | placeholder options');

// Replace this with your real tests.
test('it works', function(assert) {
  let PlaceholderOptionsObject = Ember.Object.extend(PlaceholderOptionsMixin);
  let subject = PlaceholderOptionsObject.create();
  assert.ok(subject);
});
