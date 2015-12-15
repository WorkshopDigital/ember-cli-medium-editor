import Ember from 'ember';
import AnchorFormOptionsMixin from '../../../mixins/anchor-form-options';
import { module, test } from 'qunit';

module('Unit | Mixin | anchor form options');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnchorFormOptionsObject = Ember.Object.extend(AnchorFormOptionsMixin);
  let subject = AnchorFormOptionsObject.create();
  assert.ok(subject);
});
