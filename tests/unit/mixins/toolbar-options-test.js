import Ember from 'ember';
import ToolbarOptionsMixin from '../../../mixins/toolbar-options';
import { module, test } from 'qunit';

module('Unit | Mixin | toolbar options');

// Replace this with your real tests.
test('it works', function(assert) {
  let ToolbarOptionsObject = Ember.Object.extend(ToolbarOptionsMixin);
  let subject = ToolbarOptionsObject.create();
  assert.ok(subject);
});
