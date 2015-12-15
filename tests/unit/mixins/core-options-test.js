import Ember from 'ember';
import CoreOptionsMixin from '../../../mixins/core-options';
import { module, test } from 'qunit';

module('Unit | Mixin | core options');

// Replace this with your real tests.
test('it works', function(assert) {
  let CoreOptionsObject = Ember.Object.extend(CoreOptionsMixin);
  let subject = CoreOptionsObject.create();
  assert.ok(subject);
});
