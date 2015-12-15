import Ember from 'ember';
import PasteOptionsMixin from '../../../mixins/paste-options';
import { module, test } from 'qunit';

module('Unit | Mixin | paste options');

// Replace this with your real tests.
test('it works', function(assert) {
  let PasteOptionsObject = Ember.Object.extend(PasteOptionsMixin);
  let subject = PasteOptionsObject.create();
  assert.ok(subject);
});
