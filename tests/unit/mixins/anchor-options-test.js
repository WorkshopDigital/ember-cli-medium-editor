import Ember from 'ember';
import AnchorOptionsMixin from '../../../mixins/anchor-options';
import { module, test } from 'qunit';

module('Unit | Mixin | anchor options');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnchorOptionsObject = Ember.Object.extend(AnchorOptionsMixin);
  let subject = AnchorOptionsObject.create();
  assert.ok(subject);
});
